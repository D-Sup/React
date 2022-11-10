// ### useScroll 스크롤해서 무언갈 지나쳤을 때 적용시킬 수 있음
import { useState, useEffect } from "react";

const useScroll = () => {
  const [state, setState] =useState({
    x: 0,
    y: 0
  });
  const onscroll = (event) => {
    setState({y : window.scrollY, x : window.scrollX});
  }
  useEffect(() => {
    window.addEventListener("scroll", onscroll);
    return () => window.removeEventListener("scroll", onscroll);
  }, []);
  return state;
}
const App = () => {
  const {y} = useScroll();
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <h1 style={{position: "fixed" , color: y > 100 ? "red" : "blue"}}>Hi</h1>
    </div>
  );
};
export default App;

