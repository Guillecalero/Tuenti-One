import Card from 'react-bootstrap/Card'
import FriendsCard from '../FriendsCard/FriendsCard'

const FriendsList = ({ friends }) => {

    return (


        <Row>
            {friends.map(friends => {
                return <Col md={4} key={friends._id}> <FriendsCard {...friends} /></Col>
            })}
        </Row>

    )
}













export default FriendsList