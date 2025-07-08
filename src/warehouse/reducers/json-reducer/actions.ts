/* Action types */
export const SET_ITEMS = "SET_ITEMS"

/* ************ */

export const setPosts = (posts: []) => {
  return { type: SET_ITEMS, payload: posts }
}