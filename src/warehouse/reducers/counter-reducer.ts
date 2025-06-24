import { ADD_100, DEC, INC } from "../actions";
import type { IAction, TCounter } from "../types";

const counterReducer = (state: TCounter, action: IAction) => {
  switch (action.type) {
    case INC:
      state.value++
      break

    case DEC:
      state.value--
      break

    case ADD_100:
      state.value += action.payload
      break

    default:
      return state
  }
  return state
}

export default counterReducer