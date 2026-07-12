import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'shadcn/tailwind.css'
import App from '@/App'
import '@/app/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
