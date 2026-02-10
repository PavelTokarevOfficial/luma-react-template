import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="border-b border-slate-200">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
        <div className="text-lg font-semibold tracking-tight">Luma React</div>
        <nav className="flex gap-6 text-sm font-medium">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-800'
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Header
