import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const HomePage = lazy(() => import('@/pages/home'))
const AboutPage = lazy(() => import('@/pages/about'))
const ContactPage = lazy(() => import('@/pages/contact'))
const NotFoundPage = lazy(() => import('@/pages/not-found'))

function LoadingFallback() {
  return (
    <div className="flex min-h-[40vh] items-center justify-center text-sm text-slate-500">
      Загрузка...
    </div>
  )
}

function AppRouter() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </Suspense>
  )
}

export default AppRouter
