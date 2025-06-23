/* Action types */
export const INC = "INC"
export const DEC = "DEC"
export const ADD_100 = "ADD_100"
/* ************ */

export const increment = () => {
  return { type: INC, payload: null }
}

export const decrement = () => {
  return { type: DEC, payload: null }
}

export const add_100 = (value: number) => {
  return { type: ADD_100, payload: value }
}
