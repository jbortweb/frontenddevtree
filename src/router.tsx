import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './views/Register'
import Login from './views/Login'
import AuthLayout from './layouts/AuthLayout'
import AdminLayout from './layouts/AdminLayout'
import LinkTreeView from './views/LinkTreeView'
import ProfileView from './views/ProfileView'
import HandleView from './views/HandleView'
import NotFound from './views/NotFound'
import Homeview from './views/Homeview'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homeview />} />
        <Route element={<AuthLayout />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index={true} element={<LinkTreeView />} />
          <Route path="profile" element={<ProfileView />} />
        </Route>

        <Route path="/:handle" element={<AuthLayout />}>
          <Route index={true} element={<HandleView />} />
        </Route>

        <Route path="/404" element={<AuthLayout />}>
          <Route index={true} element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
