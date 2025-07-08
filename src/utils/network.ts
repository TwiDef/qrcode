import store from "../warehouse/store"
import { setPosts } from "../warehouse/reducers/json-reducer/actions"

export const getPosts = async (url: string) => {
  try {
    const res = await fetch(url)

    if (!res.ok) {
      console.error('Could not fetch.', res.status)
      return false
    }
    const posts = await res.json()

    store.dispatch(setPosts(posts))

  } catch (error: unknown) {
    console.error('Could not fetch.', error)
  }
}