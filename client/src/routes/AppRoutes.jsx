import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/registro' element={<RegisterPage />} />
            <Route path='/login' element={<LoginPage />} />

        </Routes>
    )
}

export default AppRoutes