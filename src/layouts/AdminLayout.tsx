import { Navigate } from 'react-router-dom'
import { getUser } from '../api/ArbolAPI'
import { useQuery } from '@tanstack/react-query'
import ArbolProyect from '../components/ArbolProyect'

export default function AdminLayout() {
  const { data, isLoading, isError } = useQuery({
    queryFn: getUser,
    queryKey: ['user'],
    retry: 2,
    refetchOnWindowFocus: false,
  })

  if (isLoading) return 'Cargando...'
  if (isError) return <Navigate to="/auth/login" />

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">{data && <ArbolProyect data={data} />}</div>
      <footer className="bg-gray-900 text-white py-4">
        <p className="text-center">
          Creado con React y NodeJs por JbortWeb © 2025
        </p>
      </footer>
    </div>
  )
}
