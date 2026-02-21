import { useSelector } from "react-redux";
import { getAllTables } from "../../redux/tablesRedux";
import { Link } from "react-router-dom";
import { ListGroup, Button } from "react-bootstrap";

const Tables = () => {

    const tables = useSelector(getAllTables);

    return(
        <section>
            <h2 className="ms-2 my-4">All Tables</h2>
            {tables.map(table => (

                <ListGroup>

                    <ListGroup.Item className="d-flex justify-content-between">

                        <div className="d-flex align-items-center">
                            <h3>{table.name}</h3>
                            <p className="ms-4 mb-0"><strong>Status:</strong> <span>{table.status}</span></p>
                        </div>
                        
                        <Link key={table.id} to={"/table/" + table.id}>
                            <Button>Show More</Button>
                        </Link>

                    </ListGroup.Item>

                </ListGroup>

            ))}
        </section>
    );
};

export default Tables;