function HomePage() {
  return (
    <section className="space-y-4">
      <h1 className="font-semibold text-3xl tracking-tight">
        Добро пожаловать
      </h1>
      <p className="text-slate-600 text-base">
        Это стартовая страница. Отсюда можно перейти к разделам и накинуть свои
        блоки.
      </p>
      <div className="gap-4 grid md:grid-cols-3">
        <div className="bg-slate-50 border p-4  border-slate-200 rounded-2xl">
          <p className="font-medium text-slate-900 text-sm">Быстрый старт</p>
          <p className="mt-2 text-slate-600 text-sm">
            Готовая структура для первых экранов.
          </p>
        </div>
        <div className="bg-slate-50 p-4 border border-slate-200 rounded-2xl">
          <p className="font-medium text-slate-900 text-sm">Навигация</p>
          <p className="mt-2 text-slate-600 text-sm">
            Несколько страниц и роутинг уже подключены.
          </p>
        </div>
        <div className="bg-slate-50 p-4 border border-slate-200 rounded-2xl">
          <p className="font-medium text-slate-900 text-sm">Дизайн</p>
          <p className="mt-2 text-slate-600 text-sm">
            Нейтральные стили, чтобы можно было легко переодеть.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 bg-slate-900 p-4 border border-slate-700 rounded-xl text-white">
        <div className="flex justify-center items-center bg-indigo-500 rounded-full w-10 h-10 font-semibold text-sm">
          T
        </div>
        <div className="flex-1">
          <p className="font-medium text-sm">Тест pre-commit</p>
          <p className="text-slate-300 text-xs">
            Этот блок намеренно добавлен с кривым форматированием и
            перемешанными tailwind-классами.
          </p>
        </div>
        <a
          className="bg-white hover:bg-slate-100 px-3 py-2 rounded-md font-semibold text-slate-900 text-xs"
          href="#"
        >
          Проверить
        </a>
      </div>
    </section>
  )
}

export default HomePage
