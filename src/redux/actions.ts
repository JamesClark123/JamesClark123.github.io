// An action is a plain javascript object that consists of, at minimum, a type (of action)
// This file should implement pure functions that return actions that can be dispatched to reducers
import {
  ReduxAction,
  Actions,
  ChartData,
  Payloads,
  AlgorithmType,
} from "../types"

let count = 0
export const addChartData = (
  type: AlgorithmType,
  id: number = count,
  hidden: boolean = true,
  deleted: boolean = false
): ReduxAction => {
  const chartData: ChartData = { type, id, hidden, deleted }
  count++
  return { type: Actions.ADD_CHART_DATA, payload: chartData }
}

export const removeChartData = (id: number): ReduxAction => {
  return { type: Actions.REMOVE_CHART_DATA, payload: id }
}

export const modifyChartData = (
  newData: Payloads[Actions.MODIFY_CHART_DATA]
): ReduxAction => {
  return { type: Actions.MODIFY_CHART_DATA, payload: newData }
}

export const generateRandomData = (): ReduxAction => {
  return { type: Actions.CREATE_NEW_CHARTABLE_DATA, payload: null }
}

export const runAlgorithms = (): ReduxAction => {
  return { type: Actions.RUN_ALGORITHMS, payload: null }
}

export const stepAlgorithm = (): ReduxAction => {
  return { type: Actions.STEP_ALGORITHM, payload: null }
}

export const stopAlgorithms = (): ReduxAction => {
  return { type: Actions.STOP_ALGORITHMS, payload: null }
}
