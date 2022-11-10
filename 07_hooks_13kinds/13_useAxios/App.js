// ### useAxios
import { useState, useEffect, useRef } from "react";
import useAxios from "./useAxios";



const App = () => {
  const {loading, data, error, refetch} = useAxios({url:"https://yts.mx/api/v2/list_movies.json"}); 
  console.log(`Loading: ${loading}\nError: ${data}\nError: ${error}\nData:${JSON.stringify(data)}`);
  return (
    <div className="App">
      <h1>{data && data.status}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>refetcth</button>
    </div>
  );
};
export default App;
