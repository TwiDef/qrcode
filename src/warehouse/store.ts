import type { IAction, IState } from "./types";
import counterReducer from "./reducers/counter-reducer";

const initialState: IState = {
  counter: {
    value: 0
  }
}

const store = {
  _subscriber: () => { },

  _state: {
    ...initialState
  },

  subscribe(observer: () => void) {
    this._subscriber = observer
  },

  getState() {
    return this._state
  },

  dispatch(action: IAction) {
    this._state.counter = counterReducer(this._state.counter, action)
    this._subscriber()
  },
}

export default store


