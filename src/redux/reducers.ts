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
} from "../types"
import {
  selectionSort,
  insertionSort,
  generateRandomIntArray,
  shellSort,
  quickSort,
} from "../utils"

function runAlgorithm(data: ChartableData, algorithm: AlgorithmType) {
  switch (algorithm) {
    case AlgorithmType.SELECTION_SORT:
      return selectionSort(data as SortingChartableData)
    case AlgorithmType.INSERTION_SORT:
      return insertionSort(data as SortingChartableData)
    case AlgorithmType.SHELL_SORT:
      return shellSort(data as SortingChartableData)
    case AlgorithmType.QUICK_SORT:
      return quickSort(data as SortingChartableData)
    default:
      return undefined
  }
}
function createChartableData(
  type: AlgorithmClass | null,
  size: number
): ChartableData {
  switch (type) {
    case AlgorithmClass.SORT:
      return generateRandomIntArray(size, size)
    default:
      return null
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
        originalData_ = createChartableData(currentClass_, maxChartSize)

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
      originalData_ = createChartableData(currentClass, maxChartSize)
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
        let step = value.steps[currentStep]
        let newArray = value.currentState?.slice()
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
            currentState: newArray,
            steps: value.steps,
          }
        } else {
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
    default:
      return state
  }
}
