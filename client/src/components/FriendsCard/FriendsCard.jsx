import Card from 'react-bootstrap/Card'
import { Link } from 'react-dom'

const FriendsCard = ({ username, _id, image_URL }) => {
    return (

        <Card className="FriendsCard" style={{ width: '18rem' }}>
            <Card.Image_URL variant="top" src={image_URL} />
            <Card.Body>
                <Card.username>{username}</Card.username>
                <Link to={`/detalles/${_id}`}>
                    <Card.Text>
                        Saoko papi, saokooo...
                    </Card.Text>
                    <div className="d-grid gap-2">
                        <Button variant="primary">Añadir</Button>
                    </div>
                </Link>
            </Card.Body>
        </Card >

    )
}

export default FriendsCard