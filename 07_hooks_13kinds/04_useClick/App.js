// ### useClick, useHover ###
// https://www.30secondsofcode.org/react/s/use-hover
// React 16.8v 부터는 Hook 을 조건문, 반복문, 중첩함수 내에서 호출할 수 없습니다.

// https://velog.io/@bami/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EB%AA%85-%EC%A3%BC%EA%B8%B0
// https://velog.io/@ylyl/TIL-react-lifecycle-useEffect
// https://rrecoder.tistory.com/106
// https://velog.io/@youngminss/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EC%83%9D%EB%AA%85%EC%A3%BC%EA%B8%B0-%EB%A9%94%EC%84%9C%EB%93%9C
import { useState, useEffect, useRef } from "react";

const useClick = (onClick) => {
    const element = useRef();
    useEffect(() => {
        if(typeof onClick !== "function"){
            return;
        }
        if(element.current){ //useEffect가 mount 되었을 때 call
            element.current.addEventListener("click", onClick);
        }
        return () => { 
            if (element.current) { // componentWillUnMount떄 호출 
                element.current.removeEventListener("click", onClick);
            }
        }
    }, []); 
    return typeof onClick !== "function" ? undefined: element;
}
// useEffect 내에서 이벤트 바인딩을 막고, 최종적으로 undefinded 를 리턴 해야합니다.
// 단순히 이벤트의 바인딩만 막으려면 return element 를 그대로 사용해도 괜찮습니다.

// sayHello를 가진 useClick이 mount 되었을 때 클릭 이벤트를 추가
// useEffect안에 function을 넣으면 componentDidmount, componentDidUpdate떄 호출 dependency가 존재하지 않는 한.
// 만약 dependency가 존재한다면 componentDidmount일 때만 호출 될 것임
// componentWillUnMount로 일 때는? 그떄 return 
// component가 mount되지 않았을 때 eventListener가  배치되게 하고 싶지 않기떄문에
// function을 리턴받았다면 그 function은 componentWillUnMount로 부터 호출된것


const App = () => {
    const sayHello = () => console.log("say hello");
    const title = useClick(sayHello);
    return (
        <>
        <div>
            <h1 ref={title}>Hi</h1>
        </div>
        </>
    );
};

export default App;

