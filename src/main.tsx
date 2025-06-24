import { createRoot } from 'react-dom/client';
import store from './warehouse/store.ts';

import Layout from './Layout.tsx';

import './main.css';

window.store = store
const root = createRoot(document.getElementById('root') as HTMLElement)

let rerenderTree = (): void => {
  root.render(
    <Layout />
  )
}

rerenderTree()
store.subscribe(rerenderTree)
