import { ListGroup } from "react-bootstrap";

const Offers = () => {
    return (
        <div className="container-fluid">
            <h1>List of Our Branches:</h1>
            <div className="container-fluid">
                <ListGroup as="ol" >
                    <ListGroup.Item as="li"><span className="fs-1">Rangpur</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-1">Dhaka</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-1">Rajshahi</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-1">Khulna</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-1">Chittagong</span></ListGroup.Item>
                    <ListGroup.Item as="li"><span className="fs-1">Bogura</span></ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}
export default Offers;