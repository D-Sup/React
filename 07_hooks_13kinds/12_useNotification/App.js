// // ### useNotification 
import { useState, useEffect, useRef } from "react";
// https://developer.mozilla.org/ko/docs/Web/API/notification
const useNotification = (title, options) => {
  if(!("Notification" in window)){
    return; 
  }
  const fireNotif = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then(permission => {
        if(permission === "granted"){
          new Notification(title, options);
        } else {
          return;
        }
      })
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
}

const App = () => {
  const triggerNotif = useNotification("can i steel your snack", {body:"i love kimchi dont you"})
  return (
    <div className="App">
      <button onClick={triggerNotif}>hello</button>
    </div>
  );
};
export default App;
