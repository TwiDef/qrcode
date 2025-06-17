import { createRoot } from 'react-dom/client'
import state, { subscribe } from './warehouse/store.ts'

import Layout from './Layout.tsx'

import './main.css'

const root = createRoot(document.getElementById('root') as HTMLElement)

let rerenderTree = (): void => {
  root.render(
    <Layout state={state} />
  )
}

rerenderTree()
subscribe(rerenderTree)
