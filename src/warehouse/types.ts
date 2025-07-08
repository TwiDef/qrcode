export type TCounter = {
  value: number
}

export type TJson = {
  limit: number,
  posts: Array<IPost>
  skip: number
  total: number
}

export interface IState {
  counter: TCounter,
  json: TJson | null
}

export interface IAction {
  type: string,
  payload: any
}

export interface IPost {
  body: string,
  id: number,
  reactions: { likes: number, dislikes: number },
  tags: Array<string>,
  title: string,
  userId: number
  views: number
}