import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Analytics } from "@vercel/analytics/react"
import './index.css'
import Router from "./Router"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Analytics />
    <Router />
  </StrictMode>,
)
