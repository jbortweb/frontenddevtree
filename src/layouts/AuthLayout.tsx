import { Link, Outlet } from 'react-router-dom'
import { Toaster } from 'sonner'

export default function AuthLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-slate-800">
        <div className="max-w-lg mx-auto pt-10 px-5">
          <Link to="/">
            <img src="/logo.svg" className="w-full block" alt="Logotipo" />
          </Link>
          <div className="py-10">
            <Outlet />
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 text-white py-4">
        <p className="text-center">
          Creado con React y NodeJs por JbortWeb © 2025
        </p>
      </footer>
      <Toaster position="top-right" />
    </div>
  )
}
