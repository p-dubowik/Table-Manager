import { Row, Col, Form } from "react-bootstrap"

const StatusForm = props => {
    return (
        <Row className="align-items-center">
            <Col xs="1">
                <Form.Label className="fw-bold">Status:</Form.Label>
            </Col>
            <Col xs="2" >
                <Form.Select 
                name="status"
                value={props.dataStatus}
                onChange={props.onChange}
                >
                    <option>Busy</option>
                    <option>Reserved</option>
                    <option>Cleaning</option>
                    <option>Free</option>
                </Form.Select>
            </Col>
        </Row>
    );
};

export default StatusForm;