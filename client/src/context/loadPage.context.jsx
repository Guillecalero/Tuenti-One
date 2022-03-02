import { createContext, useEffect } from "react"
import { useState } from "react"
import { useContext } from "react"
import posteosService from "../services/posteos.service"

const ReloadContext = createContext()

const LoadPageWrapper = (props) => {

    const [loadPost, setLoadPost] = useState([])

    const reloadPage = () => {
        posteosService
            .getAllPost()
            .then(({ data }) => {
                setLoadPost(data)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => reloadPage(), [])
    return (
        <ReloadContext.Provider value={{ loadPost, reloadPage }}>
            {props.children}
        </ReloadContext.Provider>
    )
}

export { ReloadContext, LoadPageWrapper }