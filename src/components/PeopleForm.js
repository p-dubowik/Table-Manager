import { Row, Col, Form } from "react-bootstrap"
import PropTypes from "prop-types";


const PeopleForm = props => {
    return (
        <Row className="align-items-center my-5">
            <Col xs="1">
                <Form.Label className="fw-bold">People:</Form.Label>
            </Col>
            <Col xs="1">
                <Form.Control 
                name="people"
                value={props.dataPeople}
                type="number"
                min={0}
                max={10}
                onChange={props.onChange}
                />
            </Col>
            <Col xs="auto">/</Col>
            <Col xs="1">
                <Form.Control 
                name="maxPeople"
                value={props.dataMaxPeople}
                type="number"
                min={0} 
                max={10}
                onChange={props.onChange}
                />
            </Col>
        </Row>
    );
};

PeopleForm.propTypes = {
    dataPeople: PropTypes.number.isRequired,
    dataMaxPeople: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default PeopleForm;