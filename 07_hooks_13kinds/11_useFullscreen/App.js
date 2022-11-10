// ### useFullscreen 
import { useState, useEffect, useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if(element.current){
      element.current.requestFullscreen();
      if(callback && typeof callback === "function"){
        callback(true)
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if(callback && typeof callback === "function"){
      callback(false)
    }
  }
  return { element, triggerFull, exitFull };
}
const App = () => {
  const callback = (isFull) =>{
    console.log(isFull ? "we are full" : "we are small");
  }
  const { element, triggerFull, exitFull } = useFullScreen(callback);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
      <img src="http://i.ytimg.com/vi/xRbPAVnqtcs/hqdefault.jpg"></img>
      <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};
export default App;

// ++ bug solution
// import { useState, useEffect, useRef } from "react";

// const useFullScreen = (callback) => {
//   const element = useRef();
//   const runCb = isFull => {
//     if(callback && typeof callback === "function"){
//       callback(isFull)
//     }
//   }
//   const triggerFull = () => {
//     if (element.current) {
//       if (element.current.requestFullscreen) {
//         element.current.requestFullscreen();
//       } else if (element.current.mozCancelFullscreen) {
//       element.current.mozCancelFullscreen()
//       } else if (element.current.webkitExitFullscreen) {
//       element.current.webkitExitFullscreen()
//       } else if (element.current.msExitFullscreen) {
//       element.current.msExitFullscreen()
//       }
//       runCb(true);
//     };
//   };
//   const exitFull = () => {
//     document.exitFullscreen()
//     if (document.exitFullscreen) {
//     document.exitFullscreen()
//     } else if (document.mozCancelFullscreen) {
//     document.mozExitFullscreen()
//     } else if (document.webkitExitFullscreen) {
//     document.webkitExitFullscreen()
//     } else if (document.msExitFullscreen) {
//     document.msExitFullscreen()
//     }
//     runCb(false);
//   }
//   return { element, triggerFull, exitFull };
// };

// const App = () => {
//   const callback = (isFull) =>{
//     console.log(isFull ? "we are full" : "we are small");
//   }
//   const { element, triggerFull, exitFull } = useFullScreen(callback);
//   return (
//     <div className="App" style={{ height: "1000vh" }}>
//       <div ref={element}>
//       <img src="http://i.ytimg.com/vi/xRbPAVnqtcs/hqdefault.jpg"></img>
//       <button onClick={exitFull}>Exit fullscreen</button>
//       </div>
//       <button onClick={triggerFull}>Make fullscreen</button>
//     </div>
//   );
// };
// export default App;
