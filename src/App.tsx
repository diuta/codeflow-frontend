import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

type dataType = { resp: string } | null;

function App() {
  const [data, setData] = useState<dataType>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/health")
      .then((response) => {
        // throw new Error("blabla")
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        if (axios.isAxiosError(error)) {
          if (error.response) {
            setErrorMessage(error.message);
          } else {
            setErrorMessage("Could not reach the server");
          }
        } else {
          setErrorMessage(error.message);
        }
      });
  }, []);

  return (
    <div className="test">
      {errorMessage != null ? errorMessage : data?.resp}
    </div>
  );
}

export default App;
