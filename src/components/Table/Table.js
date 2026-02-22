import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTableById } from "../../redux/tablesRedux";
import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";



const Table = () => {

    const { tableId } = useParams();

    const tableData = useSelector(state => getTableById(state, tableId));
    console.log("tableData: ",tableData);

    if(!tableData) return <Navigate to="/" />

    return(
        <Container>
            <h1 className="ms-2 my-4">Table {tableData.id}</h1>

            <Form>

                <Row className="align-items-center">
                    <Col xs="1">
                        <Form.Label >Status:</Form.Label>
                    </Col>
                    <Col xs="2" >
                        <Form.Select >
                            <option >Busy</option>
                            <option>Reserved</option>
                            <option>Cleaning</option>
                            <option>Free</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="align-items-center my-5">
                    <Col xs="1">
                        <Form.Label>People:</Form.Label>
                    </Col>
                    <Col xs="1">
                        <Form.Control/>
                    </Col>
                    <Col xs="auto">/</Col>
                    <Col xs="1">
                        <Form.Control placeholder={tableData.maxPeople} disabled />
                    </Col>
                </Row>

                <Row className="align-items-center">
                    <Col xs="1">
                        <Form.Label>Bill:</Form.Label>
                    </Col>
                    <Col xs="2">
                        <InputGroup>
                            <InputGroup.Text>$</InputGroup.Text>
                            <Form.Control/>
                        </InputGroup>
                    </Col>
                </Row>

                <Button type="submit" className="my-4">UPDATE</Button>

            </Form>
        </Container>
    );
};

export default Table;