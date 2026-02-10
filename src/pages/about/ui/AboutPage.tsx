function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">О проекте</h1>
      <p className="text-base text-slate-600">
        Небольшая заготовка, где можно описать продукт, команду или
        историю.
      </p>
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-slate-500">Ключевые факты</p>
        <ul className="mt-3 space-y-2 text-sm text-slate-700">
          <li>React + Vite + Tailwind уже подключены.</li>
          <li>Роутер вынесен в `app/router.tsx`.</li>
          <li>Секции легко заменить на реальные блоки.</li>
        </ul>
      </div>
    </section>
  )
}

export default AboutPage
