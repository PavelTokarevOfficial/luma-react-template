import Header from '@/widgets/header'
import AppRouter from '@/app/router'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main className="mx-auto w-full max-w-5xl px-6 py-10">
        <AppRouter />
      </main>
    </div>
  )
}

export default App
