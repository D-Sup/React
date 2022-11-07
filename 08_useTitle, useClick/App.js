// // ### useEffect, useTitle ###
//     // useEffect는 componentDidmount, componentWillUnMount, componentDidUpdate 모두 역할
//     // 모든 변화를 감시할거고, component는 unmount 될 것임 
//     // 두번쨰 인자만 바뀔때만 componentDidUpdate를 가지게 될것 
//     // unmount는 컴포넌트가 화면에서 사라지는 것
//     // 컴포넌트는 크게 세 가지 주기를 가집니다. 컴포넌트를 브라우저에 그리는 마운트(Mount), 
//     // 컴포넌트를 브라우저에 그린 후 변경 사항을 그리는 업데이트(Update), 
//     // 컴포넌트를 브라우저에서 제거하는 언마운트(Unmount)과정을 가지고있습니다.
//     // componentDidMount은 컴포넌트가 트리에 삽입된 직후에 호출되며(컴포넌트가 생성이 될 때),
//     // componentDidUpdate 컴포넌트가 갱신이 일어난 직후에 호출되며(state 변화가 있을 때, 최초 생성 시엔 호출되지 않음),
//     // componentWillUnmount은 컴포넌트가 제거되기 직전에 호출된다.
// import { useState, useEffect } from "react";
// // componentDidmount, componentWillUnMount를 가진 예제
// const useTitle = (initialTitle) => {
//     const [ title, setTitle ] = useState(initialTitle);
//     const UpdateTitle = () => {
//         const htmlTitle = document.querySelector("title")
//         htmlTitle.innerText = title;
//     }
//     useEffect(UpdateTitle, [title]);
//     return setTitle;
// }

// const App = () => { 

//     const titleUpdater = useTitle("Loading...");
//     setTimeout(() => titleUpdater("Home"), 4000);

//     return (
//         <>
//             <div>Hi</div>
//         </>
//     );
// };

// export default App;


// import { useState, useEffect, useRef } from "react";

// const App = () => { 

//     const potato = useRef();
//     // getElementById()를 하는 것과 같은 것
//     setTimeout(() => potato.current.focus() , 2000);
//     return (
//         <>
//             <div>Hi</div>
//             <input ref={potato} placeholder="la"/>
//         </>
//     );
// };

// export default App;

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

