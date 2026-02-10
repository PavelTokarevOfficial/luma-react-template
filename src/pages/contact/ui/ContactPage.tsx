function ContactPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold tracking-tight">Контакты</h1>
      <p className="text-base text-slate-600">
        Здесь можно добавить форму, карту или список каналов связи.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-medium text-slate-900">Почта</p>
          <p className="mt-2 text-sm text-slate-600">hello@luma.dev</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-medium text-slate-900">Телефон</p>
          <p className="mt-2 text-sm text-slate-600">+1 (555) 123-4567</p>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
