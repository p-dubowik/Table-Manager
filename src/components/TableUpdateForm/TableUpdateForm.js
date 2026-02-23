import { Form, Button, Container, Row, Col, InputGroup } from "react-bootstrap";
import updateFormData from "../../utils/updateFormData";
import { useState } from "react";



const TableUpdateForm = props => {
    const tableData = props.tableData;
    const tableId = props.tableId;
    

    const [formData, setFormData] = useState({
        status: tableData.status,
        people: tableData.people,
        maxPeople: tableData.maxPeople,
        bill: tableData.bill
    });
    const [saving, setSaving] = useState(false);

    const handleUpdate = e => {
        e.preventDefault();
        setSaving(true);
    
        const url = `http://localhost:3131/api/tables/${tableId}`;
        const options = {
            method: 'PATCH',

            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(formData)
        };


        fetch(url, options)
        .then(res=> {
            if(!res.ok) throw new Error("failed")
                return res.json()
        })
        .then(data => console.log(data))
        .finally(()=> {
            setSaving(false);
        })


    };


    const handleChange = e => {
        const { name, value } = e.target;

        const updatedData = updateFormData(formData, name, value);
        setFormData(updatedData);
    };
    



    return (
        <Container>
            <h1 className="ms-2 my-4">Table {tableData.id}</h1>

            <Form onSubmit={handleUpdate}>

                <Row className="align-items-center">
                    <Col xs="1">
                        <Form.Label className="fw-bold">Status:</Form.Label>
                    </Col>
                    <Col xs="2" >
                        <Form.Select 
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        >
                            <option>Busy</option>
                            <option>Reserved</option>
                            <option>Cleaning</option>
                            <option>Free</option>
                        </Form.Select>
                    </Col>
                </Row>

                <Row className="align-items-center my-5">
                    <Col xs="1">
                        <Form.Label className="fw-bold">People:</Form.Label>
                    </Col>
                    <Col xs="1">
                        <Form.Control 
                        name="people"
                        value={formData.people}
                        type="number"
                        min={0}
                        max={10}
                        onChange={handleChange}
                        />
                    </Col>
                    <Col xs="auto">/</Col>
                    <Col xs="1">
                        <Form.Control 
                        name="maxPeople"
                        value={formData.maxPeople}
                        type="number"
                        min={0} 
                        max={10}
                        onChange={handleChange}
                        />
                    </Col>
                </Row>

            
                {formData.status === "Busy" && (
                    <Row className="align-items-center">
                        <Col xs="1">
                            <Form.Label className="fw-bold">Bill:</Form.Label>
                        </Col>
                        <Col xs="2">
                            <InputGroup>
                                <InputGroup.Text>$</InputGroup.Text>
                                <Form.Control 
                                name="bill"
                                value={formData.bill}
                                type="number"
                                onChange={handleChange}
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                    )}

                <Button type="submit" className="my-4" disabled={saving}>
                    {saving? "Saving..." : "UPDATE"}
                </Button>

            </Form>
        </Container>
    );

};

export default TableUpdateForm;