import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  AboutPage,
  HomePage,
  PortfolioPage,
} from '@/pages/StudioPages'
import { NotFound } from '@/pages/NotFound'

export default function App() {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
