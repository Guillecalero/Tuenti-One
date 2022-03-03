import { createContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import userService from "../../services/user.service"

const ReloadContext = createContext()

const LoadPageWrapper = (props) => {

    const [loadUser, setLoadUser] = useState({})

    const reloadPage = () => {

        userService

            .getAllUsers()
            .then(({ data }) => {
                setLoadUser(data)

            })
            .catch(error => console.log(error))

        useEffect(() => reloadPage(), ({}))

        return (
            <ReloadContext.Provider value={{ loadUser, reloadPage }}>
                {props.children}
            </ReloadContext.Provider>
        )
    }

}

export { ReloadContext, LoadPageWrapper }