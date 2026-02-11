function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">
        Добро пожаловать
      </h1>
      <p className="text-base text-slate-600">
        Это стартовая страница. Отсюда можно перейти к разделам и накинуть свои
        блоки.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-900">Быстрый старт</p>
          <p className="mt-2 text-sm text-slate-600">
            Готовая структура для первых экранов.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-900">Навигация</p>
          <p className="mt-2 text-sm text-slate-600">
            Несколько страниц и роутинг уже подключены.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <p className="text-sm font-medium text-slate-900">Дизайн</p>
          <p className="mt-2 text-sm text-slate-600">
            Нейтральные стили, чтобы можно было легко переодеть.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomePage
