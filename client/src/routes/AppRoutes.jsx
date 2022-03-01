import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/registro' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/profile' element={<ProfilePage />} />

        </Routes>
    )
}

export default AppRoutes