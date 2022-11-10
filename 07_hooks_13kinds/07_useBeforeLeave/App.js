// ### useBeforeLeave ### 마우스가 브라우저를 벗어났을 때 발생
import { useState, useEffect } from "react";

const useBeforeLeave = (onBefore) => {

  const handle = (event) => {
    const { clientY } = event;
    if(clientY <= 0){ // 마우스가 위로만 벗어났을 때
      onBefore();
    }
    // console.log(event);
  };
  useEffect(() => {
    if(typeof onBefore !== "function"){
      return;
    } 
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle); // componentWillUnMount 때는 이벤트를 지움
  }, []);
}

const App = () => {
  const begForLife = () => console.log("pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
};
export default App;



