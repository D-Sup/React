// ### useEffect, useTitle ###
    // useEffect는 componentDidmount, componentWillUnMount, componentDidUpdate 모두 역할
    // 모든 변화를 감시할거고, component는 unmount 될 것임 
    // 두번쨰 인자만 바뀔때만 componentDidUpdate를 가지게 될것 
    // unmount는 컴포넌트가 화면에서 사라지는 것
    // 컴포넌트는 크게 세 가지 주기를 가집니다. 컴포넌트를 브라우저에 그리는 마운트(Mount), 
    // 컴포넌트를 브라우저에 그린 후 변경 사항을 그리는 업데이트(Update), 
    // 컴포넌트를 브라우저에서 제거하는 언마운트(Unmount)과정을 가지고있습니다.
    // componentDidMount은 컴포넌트가 트리에 삽입된 직후에 호출되며(컴포넌트가 생성이 될 때),
    // componentDidUpdate 컴포넌트가 갱신이 일어난 직후에 호출되며(state 변화가 있을 때, 최초 생성 시엔 호출되지 않음),
    // componentWillUnmount은 컴포넌트가 제거되기 직전에 호출된다.
import { useState, useEffect } from "react";
// componentDidmount, componentWillUnMount를 가진 예제
const useTitle = (initialTitle) => {
    const [ title, setTitle ] = useState(initialTitle);
    const UpdateTitle = () => {
        const htmlTitle = document.querySelector("title")
        htmlTitle.innerText = title;
    }
    useEffect(UpdateTitle, [title]);
    return setTitle;
}

const App = () => { 

    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 4000);

    return (
        <>
            <div>Hi</div>
        </>
    );
};

export default App;


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

