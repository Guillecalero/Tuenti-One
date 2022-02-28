import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage/RegisterPage'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/registro' element={<RegisterPage />} />

        </Routes>
    )
}

export default AppRoutes