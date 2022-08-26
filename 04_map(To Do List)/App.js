// 7.1 To Do List
import { useState } from "react";
function App () {
  const [toDo, setToDo] = useState("");
  // 1. array에 element를 추가하는 방법
  // array를 직접적으로 수정은 불가, setToDos로 array에 element를 추가해야 함

  // 2. array로부터 동일한 component에 있는 많은 것들을 render 할 수 있는 방법
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {

    // preventDefault 새로고침 동작을 막아줌 
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // 공백으로 submit 버튼을 누르면 아무런 값도 보내지지 않도록 
    // 만일 setToDo가 비어있는 String 값을 불려졌다면 그건 toDo가 비어있는 String 값이 될것임 

    setToDos((currentArray) => [toDo, ...currentArray]);
    // setToDos(function(currentArray){return});
    // ... 은 currentArray에 있는 Array들 맨 앞에 toDo를 추가해주는 것을 의미
    // 현재 toDos를 받아와서 새로운 toDo의 array로 return 하고 있음 
    setToDo("");
    // 수정하는 함수를 사용할 때 두가지 옵션
    // 1. setToDo(""); 이런 식으로 저장한 data를 가지고 값을 보낼 수 있음 
    // 2. 함수를 보내는 방법 
    // 함수를 보낼 때 react.js는 함수의 첫번째 argument로 현재 State로 보내서
    // 현재 State를 계산하거나 새로운 State를 만드는 데 사용 
  };
  console.log(toDos);
  console.log(toDos.map((item, index) => (
    <li key={index}>{item}</li>
  )));
  return (
  <div>
    <h1>My To Dos ({toDos.length})</h1>
    <form onSubmit={onSubmit}>
      <input value={toDo} onChange={onChange} type="text" placeholder="Write your to do..."/>
      <button>Add To Do</button>
    </form>
    <hr />
    <ul>
      {toDos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
    
  </div>
  );
  // map은 array 안에 함수를 넣을 수 있도록 해줌 
  // 그 함수는 array의 모든 item에 대해 실행될것임 
  // 무엇을 return하던지 간에 그 return한 값이 새로운 array에 들어가 있게 될 것임
  // ['one', 'two'].map(() => ":)") 
  // >> [':)',':)']
  // 그렇다고 해도 map은 함수의 첫번째 argument로 현재의 item을 가져올 수 있음
  // ['one', 'two'].map((item) => item.toUpperCase()) 
  // >> ['ONE','TWO']


  // array를 가져와서 그 array의 item들을 변형해서 li가 되도록 했음
  // 같은 component의 list를 render 할 때 key라는 prop을 넣어줘야함
  // react가 기본적으로 list에 있는 모든 item들을 인식하기 때문
}

export default App;
