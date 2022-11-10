// ### useTabs ###
import { useState } from "react";

const content = [
    {
        tab:"Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab:"Section 2",
        content: "I'm the content of the Section 2"
    },
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);
    if(!allTabs || !Array.isArray(allTabs)) { //    배열일 경우와 아닐 경우
        return;
    }
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};
// map함수로 content 안에 있는 배열 갯수만큼 버튼 갯수도 증가
// useTabs에서 0과 content의 인자를 받아 useState로 값 할당
// 인자와 할당된 값을 이용해서 currentItem(), changeItem 값 할당
// 버튼을 누르면 map으로 인해 index에 해당하는 content가 표시 
// 초기값이 0이기 때문에 첫번째 index에 해당하는 content가 표시되어있음
// changeItem: setCurrentIndex는 return 문에서 changeItem(index) 이러한 형식으로 사용되니 사실상 setCurrentIndex는(index)와 같은 뜻
const App = () => { 
    const {currentItem, changeItem} = useTabs(0, content);

    return (
        <>
        <div>
            {
                content.map((section, index) => (
                <button onClick={() => changeItem(index)}>{section.tab} </button>))
            }
            <div>
            {currentItem.content}
            </div>
        </div>
        </>
    );
};

export default App;