import { Route, Routes } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import FriendsList from '../components/FriendsList/FriendsList'

const AppRoutes = () => {
    return (
        <Routes>

            <Route path='/registro' element={<RegisterPage />} />
            <Route path="/detalles/:friends_id" element={<FriendsCardPage />} />

        </Routes>
    )
}

export default AppRoutes