import React from "react"
import { Provider } from "react-redux"

import createStore from "./src/redux/store"

const wrapRootElement = ({ element }) => {
  const store = createStore()
  return (
    <Provider store={store}>
      <div className="loading-cover" id="loading-cover" />
      {element}
    </Provider>
  )
}

export default wrapRootElement
