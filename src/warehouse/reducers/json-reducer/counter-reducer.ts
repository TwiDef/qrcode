import type { IAction, TJson } from "../../types"
import { SET_ITEMS } from "./actions"

const jsonReducer = (state: TJson, action: IAction) => {
  switch (action.type) {
    case SET_ITEMS:
      state = { ...state, ...action.payload }
      break

    default:
      return state
  }
  return state
}

export default jsonReducer