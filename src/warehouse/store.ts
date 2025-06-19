
const store = {
  _subscriber: () => { },

  _state: {
    value: 0,
  },

  subscribe(observer: any) {
    this._subscriber = observer
  },

  getState() {
    return this._state
  },

  inc() {
    this._state.value++
    this._subscriber()
  },

  dec() {
    this._state.value--
    this._subscriber()
  },
}

export default store


