import type { IAction, IState } from "./types";
import counterReducer from "./reducers/counter-reducer/counter-reducer";
import jsonReducer from "./reducers/json-reducer/counter-reducer";

const initialState: IState = {
  counter: {
    value: 0
  },
  json: null
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
    this._state.json = jsonReducer(this._state.json!, action)
    this._subscriber()
  },
}

export default store


