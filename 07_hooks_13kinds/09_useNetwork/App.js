// ### useNetwork ### navigator가 online 또는 offline 되는걸 막아줌 
import { useState, useEffect } from "react";

const useNetwork = onChange => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if(typeof onChange === "function"){
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  }
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    }
  }, []);
  return status;
};
const App = () => {
  const handelNetworkChange = (online) => {
    console.log(online? "We just went online" : "we are offline")
  }
  const onLine = useNetwork(handelNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "Offline"}</h1>
    </div>
  );
};
export default App;