// A selector is a pure function that is applied (mapped) to state to return data
import { State } from "../types"

export const selectAlgorithmsData = (state: State) => state.algorithms

export const selectChartsData = (state: State) =>
  selectAlgorithmsData(state).chartsData
