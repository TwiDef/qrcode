export type TCounter = {
  value: number
}

export interface IState {
  counter: TCounter
}

export interface IAction {
  type: string,
  payload: any
}