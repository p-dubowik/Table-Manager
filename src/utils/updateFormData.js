


const updateFormData = (prev, name, value) => {
    const updated = {
        ...prev,
        [name]: value
    };
    if(name === "status"){
        if(value !== "Busy"){
            updated.people = 0;
            updated.bill = 0;
        };
    };
    if(name === "people"){
        if(Number(updated.people) > Number(updated.maxPeople)){
            updated.maxPeople = updated.people;
        }
    }
    return updated;
}

export default updateFormData;