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