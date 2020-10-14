// reducers take state and an action as the arguments and returns the next state of the app
import {
  Actions,
  ReduxAction,
  AlgorithmData,
  SortingStepType,
  MapToChartingDataType,
  getAlgorithmClass,
  AlgorithmClass,
  ChartsData,
  ChartableData,
  AlgorithmType,
  SortingChartableData,
  SortingChartDataType,
} from "../types"
import {
  selectionSort,
  insertionSort,
  generateRandomIntArray,
  shellSort,
  quickSort,
  heapSort,
  mergeSort,
} from "../utils"

function runAlgorithm(data: ChartableData, algorithm: AlgorithmType) {
  switch (algorithm) {
    case AlgorithmType.SELECTION_SORT:
      return selectionSort(data?.data as Array<SortingChartDataType>)
    case AlgorithmType.INSERTION_SORT:
      return insertionSort(data?.data as Array<SortingChartDataType>)
    case AlgorithmType.SHELL_SORT:
      return shellSort(data?.data as Array<SortingChartDataType>)
    case AlgorithmType.QUICK_SORT:
      return quickSort(data?.data as Array<SortingChartDataType>)
    case AlgorithmType.HEAP_SORT:
      return heapSort(data?.data as Array<SortingChartDataType>)
    case AlgorithmType.MERGE_SORT:
      return mergeSort(data?.data as Array<SortingChartDataType>)
    default:
      return undefined
  }
}
function createChartableData(
  type: AlgorithmClass | null,
  size: number
): Array<SortingChartDataType> {
  switch (type) {
    case AlgorithmClass.SORT:
      return generateRandomIntArray(size, size)
    default:
      return []
  }
}

export function algorithms(
  state: AlgorithmData,
  action: ReduxAction
): AlgorithmData {
  const {
    originalData,
    numberOfSteps,
    currentStep,
    mapToChartingData,
    chartsData,
    currentClass,
    maxCharts,
    maxChartSize,
  } = state
  let index,
    chartsData_: ChartsData,
    mapToChartingData_: MapToChartingDataType,
    currentStep_,
    running_,
    currentClass_: AlgorithmClass,
    originalData_: ChartableData

  switch (action.type) {
    case Actions.ADD_CHART_DATA:
      currentClass_ = getAlgorithmClass(action.payload.type)
      if (currentClass_ !== currentClass) {
        chartsData_ = []
        mapToChartingData_ = {}
      } else {
        chartsData_ = chartsData.slice()
        mapToChartingData_ = { ...mapToChartingData }
      }

      if (
        (index = chartsData_.findIndex(
          cD => cD.type === action.payload.type
        )) !== -1
      ) {
        chartsData_[index] = { ...chartsData_[index], deleted: true }
        return { ...state, chartsData: chartsData_ }
      }

      if (chartsData_.length >= maxCharts) return state

      originalData_ = originalData
      if (!originalData_)
        originalData_ = {
          data: createChartableData(currentClass_, maxChartSize),
        }

      chartsData_.push(action.payload)
      mapToChartingData_[action.payload.id] = {
        currentState: originalData_,
        steps: [],
      }

      return {
        ...state,
        originalData: originalData_,
        currentClass: currentClass_,
        chartsData: chartsData_,
        mapToChartingData: mapToChartingData_,
      }
    case Actions.REMOVE_CHART_DATA:
      chartsData_ = chartsData.slice()
      index = chartsData_.findIndex(
        chartData => chartData.id === action.payload
      )
      mapToChartingData_ = { ...mapToChartingData }
      delete mapToChartingData_[chartsData_[index].id]
      chartsData_.splice(index, 1)
      return {
        ...state,
        mapToChartingData: mapToChartingData_,
        chartsData: chartsData_,
      }
    case Actions.MODIFY_CHART_DATA:
      chartsData_ = chartsData.slice()
      index = chartsData_.findIndex(
        chartData => chartData.id === action.payload.id
      )
      chartsData_[index] = { ...chartsData_[index], ...action.payload }
      return { ...state, chartsData: chartsData_ }

    case Actions.CREATE_NEW_CHARTABLE_DATA:
      mapToChartingData_ = {}
      originalData_ = { data: createChartableData(currentClass, maxChartSize) }
      for (let key in mapToChartingData) {
        mapToChartingData_[key] = { currentState: originalData_, steps: [] }
      }
      return {
        ...state,
        mapToChartingData: mapToChartingData_,
        originalData: originalData_,
      }
    case Actions.RUN_ALGORITHMS:
      mapToChartingData_ = {}
      let max = 0
      for (let { id, type } of chartsData) {
        let l = runAlgorithm(originalData, type)
        if (!l) continue
        if (l.length > max) max = l.length
        mapToChartingData_[id] = { currentState: originalData, steps: l }
      }
      return {
        ...state,
        numberOfSteps: max,
        currentStep: 0,
        running: true,
        mapToChartingData: mapToChartingData_,
      }

    case Actions.STEP_ALGORITHM:
      mapToChartingData_ = {}
      for (let key in mapToChartingData) {
        const value = mapToChartingData[key]
        const { data, auxData } = value.currentState!
        let step = value.steps[currentStep]
        let newArray = data.slice()
        let newAux = auxData?.slice()
        if (!step || !newArray) {
          mapToChartingData_[key] = value
          continue
        }
        if (step.type === SortingStepType.EXCHANGE) {
          let [index1, index2] = step.indicies
          let temp = newArray[index1]
          newArray[index1] = newArray[index2]
          newArray[index2] = temp
          mapToChartingData_[key] = {
            currentState: { data: newArray, auxData: auxData },
            steps: value.steps,
          }
        } else if (step.type === SortingStepType.COMPARE) {
          mapToChartingData_[key] = value
        } else if (step.type === SortingStepType.MAKE_AUX) {
          mapToChartingData_[key] = {
            currentState: {
              data,
              auxData: new Array<SortingChartDataType>(step.auxSize!).fill({
                value: 0,
              }),
            },
            steps: value.steps,
          }
        } else if (step.type === SortingStepType.COPY_TO_AUX) {
          const [from] = step.indicies
          const [to] = step.auxIndicies!
          if (!newAux) continue
          newAux[to] = data[from]
          mapToChartingData_[key] = {
            currentState: { data: data, auxData: newAux },
            steps: value.steps,
          }
        } else if (step.type === SortingStepType.COPY_FROM_AUX) {
          const [to] = step.indicies
          const [from] = step.auxIndicies!
          if (!auxData) continue
          newArray[to] = auxData[from]
          mapToChartingData_[key] = {
            currentState: { data: newArray, auxData: auxData },
            steps: value.steps,
          }
        } else if (step.type === SortingStepType.COMPARE_AUX) {
          mapToChartingData_[key] = value
        }
      }
      currentStep_ = currentStep + 1
      running_ = currentStep_ < numberOfSteps
      return {
        ...state,
        currentStep: currentStep_,
        running: running_,
        mapToChartingData: mapToChartingData_,
      }
    case Actions.STOP_ALGORITHMS:
      return { ...state, running: false }
    case Actions.CONTINUE_ALGORITHMS:
      return { ...state, running: true }
    default:
      return state
  }
}
