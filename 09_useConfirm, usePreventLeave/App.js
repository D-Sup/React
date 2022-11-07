// // ### useConfirm ###
// import { useState, useEffect, useRef } from "react";

// const useConfirm = (message = "", callback, rejection) => {
//     if(typeof callback !== "function") {
//         return;
//     }
//     const confirmAction = () => {
//         if(window.confirm(message)){
//             callback();
//         } else {
//             rejection();
//         }
//     };
//     return confirmAction;
// };

// const App = () => {
//     const deleteWorld = () => console.log("Deleting thw world")
//     const abort = () => console.log("Aborted");
//     const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
//     // confirmDelete == confirmAction 
//     // if(window.confirm(message)) => callback 실행 (===deleteWorld)
//     return (
//     <button onClick={confirmDelete}>Delete the world</button>
//     );
// };

// export default App;

// ### usePreventLeave ###
const usePreventLeave = () => {
  const listener = (event) => {
    event.preventDefault();
    event.returnValue= "";
    // 이벤트가 발생하면 브라우져가 이벤트 정보를 담은 객체를 생성해서 핸들러의 인수 형태로 전달해 주기 때문에 자동으로 들어가지는 것
  };
  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () => window.removeEventListener("beforeunolad", listener);
  return { enablePrevent, disablePrevent };
}

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div className="App">
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>UnProtect</button>
    </div>
  );
};
export default App;