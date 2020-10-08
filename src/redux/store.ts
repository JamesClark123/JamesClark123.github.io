import { createStore } from "redux"

import { algorithms } from "./reducers"
import { State, ReduxAction } from "../types"
import { isMobile } from "../utils"

let initialState: State = {
  algorithms: {
    originalData: null,
    numberOfSteps: 0,
    currentStep: 0,
    currentClass: null,
    running: false,
    mapToChartingData: {},
    chartsData: [],
    maxChartSize: isMobile() ? 50 : 100,
    maxCharts: isMobile() ? 2 : 4,
  },
}

function reducer(state = initialState, action: ReduxAction): State {
  return {
    algorithms: algorithms(state.algorithms, action),
  }
}

const store = () => createStore(reducer)

export default store
