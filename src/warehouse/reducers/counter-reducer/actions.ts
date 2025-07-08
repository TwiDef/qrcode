/* Action types */
export const INC = "INC"
export const DEC = "DEC"
/* ************ */

export const increment = () => {
  return { type: INC, payload: null }
}

export const decrement = () => {
  return { type: DEC, payload: null }
}

