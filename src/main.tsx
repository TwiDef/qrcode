import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import Layout from './Layout.tsx'

import './main.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
