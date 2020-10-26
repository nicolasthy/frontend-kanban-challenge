import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { logger } from "redux-logger"

import { CrewApp } from "components/containers/CrewApp/CrewApp"

import rootReducer from "./reducers"

import "./index.css"

const middleware = [thunk]

if (process.env.NODE_ENV === "development") {
  middleware.push(logger)
}

const store = createStore(rootReducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <CrewApp />
  </Provider>,
  document.getElementById("root")
)
