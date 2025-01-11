import { Link } from 'react-router-dom'

export default function HomeNavigation() {
  return (
    <div className="space-x-2">
      <Link
        to="/auth/login"
        className=" p-2 text-white uppercase font-black text-xs rounded-lg cursor-pointer"
      >
        Iniciar Sesión
      </Link>
      <Link
        to="/auth/register"
        className="bg-lime-500 p-2 text-slate-800 uppercase font-black text-xs rounded-lg cursor-pointer"
      >
        Registrarse
      </Link>
    </div>
  )
}
