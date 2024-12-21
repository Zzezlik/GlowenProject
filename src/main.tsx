import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./output.css"
// import App from './App.tsx'
import Header from './components/header.tsx'
import Section1 from './components/section1.jsx'
import Section2 from "./components/section2.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Header />
      <Section1 />
      <Section2 />
  </StrictMode>,
)
