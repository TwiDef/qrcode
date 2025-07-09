/* Action types */
export const CHANGE_INPUT_VALUE = "CHANGE_INPUT_VALUE"
export const SET_QRCODE_SCHEMA = "SET_QRCODE_SCHEMA"
/* ************ */

export const changeInputValue = (value: string) => {
  return { type: CHANGE_INPUT_VALUE, payload: value }
}

export const setQRCodeSchema = (string: string) => {
  return { type: SET_QRCODE_SCHEMA, payload: string }
}