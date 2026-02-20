import { fetchTables } from "./redux/tablesRedux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
const App = () => {
  const dispatch = useDispatch();


  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <NavBar />
      Placeholder
    </main>
  );
}

export default App;
