import type { IAction, TQRCodeData } from "../../types"
import { CHANGE_INPUT_VALUE, SET_QRCODE_SCHEMA } from "./actions"

const qrcodeReducer = (state: TQRCodeData, action: IAction) => {
  switch (action.type) {
    case CHANGE_INPUT_VALUE:
      state = { ...state, inputValue: action.payload }
      break

    case SET_QRCODE_SCHEMA:
      state = { ...state, codeSchema: action.payload }
      break

    default:
      return state
  }
  return state
}

export default qrcodeReducer