import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {
  AboutPage,
  BookingPage,
  HomePage,
  LoginPage,
  PortfolioPage,
} from '@/pages/StudioPages'
import { NotFound } from '@/pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="portfolio" element={<PortfolioPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="booking" element={<BookingPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}
