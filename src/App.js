import { fetchTables } from "./redux/store";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();


  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      Placeholder
    </main>
  );
}

export default App;
