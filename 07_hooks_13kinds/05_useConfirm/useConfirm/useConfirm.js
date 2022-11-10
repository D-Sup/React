export const useConfirm = (message = "", onConfirm, onCancel) => {
    if(!onConfirm && typeof onConfirm !== "function") { // onConfirm이 존저하지 않거나 function이 아닐때 조건 
        return;
    }
    if(!onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if(window.confirm(message)){
            onConfirm();
        } else {
            onCancel();
        }
    };
    return confirmAction;
};