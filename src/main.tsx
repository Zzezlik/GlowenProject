import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./output.css"
// import App from './App.tsx'
import Header from './components/header.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)
