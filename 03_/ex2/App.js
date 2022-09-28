// 6.2 deps
import { useState , useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("")
  const onClick = () => setValue((prev) => prev + 1); 
  const onChange = (event) => setKeyword(event.target.value);
  console.log("i run all the time");
  useEffect(() => {
    console.log('i run only once');
  }, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5){
      console.log("SEARCH FOR", keyword);
    }
    // 첫번째 component render에서 실행되지 않기 위해 
    // 그럼으로써 특정한 keyword가 update될 때만 코드를 실행할 수 있음 
    // dependency가 변화할 때 호출 
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);
  useEffect(() => {
    console.log("i run when keyword or counter changes");
  }, [keyword, counter]);
  // keyword가 변화할 때만 실행하기 위해선 두번째 인자에 keyword를 넣어주면 됨
  // 그래서 빈 array를 써 주었을 때 react가 지켜볼게 없기 때문에 코드가 단 한 번만 실행되는 거 였음 
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
