import { Form, Button, Container } from "react-bootstrap";
import updateFormData from "../../utils/updateFormData";
import { useState } from "react";
import BillForm from "../BillForm";
import PeopleForm from "../PeopleForm";
import StatusForm from "../StatusForm";
import PropTypes from 'prop-types';



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
    
        const API = "https://table-manager-api-8e2z.onrender.com/api/tables"
        const url = `${API}/${tableId}`;
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

                <StatusForm onChange={handleChange} dataStatus={formData.status} />
                <PeopleForm onChange={handleChange} dataPeople={formData.people} dataMaxPeople={formData.maxPeople} />            
                {formData.status === "Busy" && (
                        <BillForm dataBill={formData.bill} onChange={handleChange} />
                    )}

                <Button type="submit" className="my-4" disabled={saving}>
                    {saving? "Saving..." : "UPDATE"}
                </Button>

            </Form>
        </Container>
    );

};




TableUpdateForm.propTypes = {
    tableData: PropTypes.shape({
        id: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        people: PropTypes.number.isRequired,
        maxPeople: PropTypes.number.isRequired,
        bill: PropTypes.number.isRequired
    }).isRequired,


    tableId: PropTypes.string.isRequired
};

export default TableUpdateForm;