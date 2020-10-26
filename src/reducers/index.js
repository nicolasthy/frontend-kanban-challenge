import { combineReducers } from "redux"
import talentsReducer from "./talentsReducer"

export default combineReducers({
  talents: talentsReducer,
})
