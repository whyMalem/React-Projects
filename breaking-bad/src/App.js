import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./Components/Characters";
import Header from "./Components/Header";
import { fetchData } from "./service/api";

function App() {
  const [text, setText] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async (text) => {
      const response = await fetchData(text);
      setData(response.data);
    };

    getData(text);
  }, [text]);

  return (
    <div className="App">
      <Header setText={setText} />
      <Characters data={data} />
    </div>
  );
}

export default App;
