import PropTypes from "prop-types";
// npm i prop-types
import styles from "./Button.module.css"
// import "./styles.css";
// 특정 컴포넌트를 위한 CSS파일을 만들 수 있는 기능을 얻음 
// global(전역적인) css style을 원하지 않는다면 css파일을 import 시키지 않고,
// css를 javascript 오브젝트 형식으로 써도 됨
// 하지만 create-react-app으로 작업할 때는 "분할하고" "정복하는" 것이 핵심이라
// css modules 을 이용하면 index.js에 styles.css 를 import할 필요 없이
// style 들이 modular가 될 수 있음 // create-react-app은 css 코드를 javascript 오브젝트로 변환시켜줌 
// 그리고 javascript 오브젝트는 ex(btn)을 안에 갖고 있음 
// create-react-app은 무작위적인 랜덤 class 이름을 만들어내서 가짐 
// 즉, 다른 클래스 이름들을 사용하기 위해 기억할 필요가 없음 
// 설령 같은 클래스이름을 사용한다고 해도 문제가 없음
// 원하는 부분에 style을 입히고 싶을 때 className을 적어주면 됨

// 이를 통해,
// 컴포넌트를 분리해서 만들 수 있고
// 컴포넌트를위한 css를 만들 수 있어서 컴포넌트들이나 스타일들을 독립적이게 유지시켜줄 수 있음 

function Button({text}){
    return <button className={styles.btn}>{text}</button>;
}
Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;
