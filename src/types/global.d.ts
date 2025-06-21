import store from "../warehouse/store"

declare global {
  interface Window {
    store: any
  }
}

/* window.store = store */