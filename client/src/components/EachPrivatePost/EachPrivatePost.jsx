import { useEffect, useState } from "react"
import privateService from "../../services/private.service"
import EachPrivatePostCard from '../../components/EachPrivatePostCard/EachPrivatePostCard.jsx'

const EachPrivatePost = (eachPrivatePost) => {
    const privPost = eachPrivatePost.eachPrivatePost

    return (
        <>
            <EachPrivatePostCard privatePostInfo={privPost} />
        </>
    )
}

export default EachPrivatePost