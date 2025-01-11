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
  if (data) return <ArbolProyect data={data} />
}
