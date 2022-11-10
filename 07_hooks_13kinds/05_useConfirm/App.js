// ### useConfirm ###
import { useState, useEffect, useRef } from "react";

const useConfirm = (message = "", callback, rejection) => {
    if(typeof callback !== "function") {
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)){
            callback();
        } else {
            rejection();
        }
    };
    return confirmAction;
};

const App = () => {
    const deleteWorld = () => console.log("Deleting thw world")
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld, abort);
    // confirmDelete == confirmAction 
    // if(window.confirm(message)) => callback 실행 (===deleteWorld)
    return (
    <button onClick={confirmDelete}>Delete the world</button>
    );
};

export default App;

