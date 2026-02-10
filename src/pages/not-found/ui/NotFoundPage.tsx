import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Страница не найдена</h1>
      <p className="text-base text-slate-600">
        Такой страницы нет. Вернуться на главную?
      </p>
      <Link
        className="inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white"
        to="/"
      >
        На главную
      </Link>
    </section>
  )
}

export default NotFoundPage
