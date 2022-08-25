// 6.4 Cleanup
import { useState , useEffect} from "react";
// clean up function
// 우리는 component를 없애버리거나(destroy), 생성(create) 하고 있음 
// component가 숨겨지는 것이 아닌 destroy 됨 
// component가 destroy 될 때도 코드를 실행 할 수 있음 
// component가 없어질 때 어떤 분석 결과를 보내고 싶거나
// event listener를 지우거나 혹은 console.log에 뭔가 보여줄 수도 있음 


function Hello(){
  function byFn() {
    console.log("bye :(");
  }
  function hiFn() {
    console.log("created :)");
    return byFn;
  }
  // component는 단지 jsx를 return 하는 function일 뿐 
  // component가 처음 생성될 때만 실행 
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

// 간결하게 줄여서 아래와 같이 표현 
// function Hello(){
// useEffect(() => {
//   console.log('hi :)');
//   return () => console.log("bye :(");
//   }, []);
//   return <h1>Hello</h1>;
// }




function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App;
