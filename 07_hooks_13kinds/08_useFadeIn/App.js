// ### useFadeIn ### 서서히 나타나게
import { useState, useEffect, useRef } from "react";


const useFadeIn = (duration = 0, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if(typeof duration === "number" || typeof delay === "number"){
      if(element.current){
        const { current } = element;
        current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
        current.style.opacity = 1;  
      }
    }
  }, []);

  return {ref: element, style: {opacity:0}};
};

const App = () => {
  const fadeInH1 = useFadeIn(5,10);
  const fadeInP = useFadeIn(5,10);

  return (
    <div className="App">
      <h1 {...fadeInH1}>hello</h1>
      <p {...fadeInP}>lalalala</p>
    </div>
  );
};
export default App;