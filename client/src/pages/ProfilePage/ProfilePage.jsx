import { useContext } from "react";
import { AuthContext } from '../../context/auth.context'

const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    return (

        <div>

            <img src={user?.imageURL} alt="imagen de usuari@" />
            <h3>Nombre de usuario {user?.username} </h3>
            <p>Email {user?.email} </p>
            <p>Nombre {user?.nameUser} </p>
            <p>Apellidos {user?.surnameUser} </p>
            <p>Biografía {user?.biography} </p>
            <p>Cumpleaños {user?.birthday}</p>

        </div>

    )

}

export default ProfilePage