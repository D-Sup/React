// 6.1 useEffect
import { useState , useEffect} from "react";
// 어떻게 특정 코드들이 첫번째 component render에서만 실행되게 하는지
// state를 변경할 때 모든 code들은 다시 실행되는데 
// 첫번째 component render에서만 한 번 실행되고 state로 인해 다시 실행되지 않고 싶다면 
// useEffect라고 불리는 function을 쓰면 됨 
// 두개의 argument를 가지는 function으로 
// 첫번째 인자는 딱 한번만 실행하고싶은 코드 
// 두번째 인자(dependencies)는 어떤 value가 변할때 마다 실행되고 싶은 코드 (react.js가 지켜보아햐 하는 것들)

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1); 
  console.log("i run all the time");
  const iRunOnlyOnce = () => {
    console.log('i run only once');
  }
  useEffect(iRunOnlyOnce, []);
  // useEffect(() => {
  //   console.log('i run only once');
  // }, []);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
