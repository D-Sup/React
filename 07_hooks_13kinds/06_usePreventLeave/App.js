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