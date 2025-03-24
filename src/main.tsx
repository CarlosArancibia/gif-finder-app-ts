import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GifFinderApp } from './GifFinderApp'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GifFinderApp />
  </StrictMode>
)
