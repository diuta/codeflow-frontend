import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

type dataType = {resp: string} | null

function App() {
  const [data, setData] = useState<dataType>(null);
  const [isError, setIsError] = useState(false)
  const errorMessage = "No Data Available"

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/health");
        setData(response.data);

        console.log(response.headers);
        console.log(response.status);
      } catch(error) {
        console.log("error")
        setIsError(true)
      }
    };

    fetchData()
  }, []);

  return <div className="test">{isError ? errorMessage : data?.resp}</div>;
}

export default App;
