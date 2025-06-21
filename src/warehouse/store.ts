
const store = {
  _subscriber: () => { },

  _state: {
    value: 0,
  },

  subscribe(observer: () => void) {
    this._subscriber = observer
  },

  getState() {
    return this._state
  },

  dispatch(action: { type: string, payload: any }) {
    switch (action.type) {
      case "INC":
        this._state.value++
        this._subscriber()
        break;

      case "DEC":
        this._state.value--
        this._subscriber()
        break;

      default:
        return this._state
    }
  },
}

export default store


