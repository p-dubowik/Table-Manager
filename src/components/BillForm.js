import { Row, Col, InputGroup, Form } from "react-bootstrap"

const BillForm = props => {
    return (
        <Row className="align-items-center">
            <Col xs="1">
                <Form.Label className="fw-bold">Bill:</Form.Label>
            </Col>
            <Col xs="2">
                <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control 
                    name="bill"
                    value={props.dataBill}
                    type="number"
                    onChange={props.onChange}
                    />
                </InputGroup>
            </Col>
        </Row>
    );
};

export default BillForm;