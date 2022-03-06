import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import HomePage from '../pages/HomePage/HomePage'
import ProfilePageEdit from '../pages/ProfilePageEdit/ProfilePageEdit'
import DiscoverPage from '../pages/DiscoverPage/DiscoverPage'
import PrivateRoute from './PrivateRoutes'
import Footer from '../components/Footer/Footer'
import FriendsCard from '../components/FriendsCard/FriendsCard'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/home' element={<HomePage />} />
            <Route path='/registro' element={<RegisterPage />} />
            <Route path='/' element={<LoginPage /> /*Login page as the main page*/} />
            <Route path='/perfil/:username' element={<ProfilePage />} />
            <Route path='/:username/editar' element={<ProfilePageEdit />} />
            {/* <Route path="/descubrir" element={<PrivateRoute />}> */}
            <Route path='/descubrir' element={<DiscoverPage />} />
            {/* </Route> */}
        </Routes>
    )
}

export default AppRoutes