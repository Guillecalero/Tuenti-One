import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import HomePage from '../pages/HomePage/HomePage'
import ProfilePageEdit from '../pages/ProfilePageEdit/ProfilePageEdit'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/home' element={<HomePage />} />
            <Route path='/registro' element={<RegisterPage />} />
            {/* Login page as the principal page */}
            <Route path='/' element={<LoginPage />} />
            <Route path='/perfil' element={<ProfilePage />} />
            <Route path='/editar' element={<ProfilePageEdit />} />

        </Routes>
    )
}

export default AppRoutes