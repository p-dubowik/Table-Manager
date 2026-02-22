import { Route, Routes } from "react-router-dom";
import { fetchTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Table from "./components/Table/Table";
import Tables from "./components/Tables/Tables";


const App = () => {
  const dispatch = useDispatch();


  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <NavBar />

      <Routes>
        <Route path="/" element={<Tables />}/>
        <Route path="/table/:tableId" element={<Table />}/>
      </Routes>
    </main>
  );
}

export default App;
