
const state = {
  value: 0
}

let rerenderTree: Function = (): void => { }

export const inc = () => {
  state.value++
  rerenderTree()
}

export const dec = () => {
  state.value--
  rerenderTree()
}

export const subscribe = (observer: Function) => {
  rerenderTree = observer
}

export default state

