import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTableById } from "../../redux/tablesRedux";
import TableUpdateForm from "../TableUpdateForm/TableUpdateForm";



const Table = () => {

    const { tableId } = useParams();
    const tableData = useSelector(state => getTableById(state, tableId));


    if (!tableData) return <Navigate to="/" />;


    return(
            <TableUpdateForm tableData={tableData} tableId={tableId}/>
    );
};

export default Table;