// ### useInput ###
import { useState} from "react";

const useInput = (initialValue) => {
    const [ value, setValue ] = useState(initialValue);
const onChange = event => {
    setValue(event.target.value);
};
// const onChange = event => {
//     const {
//         target : { value }
//     } = event;
//     setValue(value);
// }
    return {value, onChange};
};
// 이벤트를 분리된 파일, 다른 entity에 연결해서 처리 할 수 있음 

function App() {
    const name = useInput("MR.");
    return (
        <>
          <input {...name}/>
          {/* value={name.value} === {...name} */}
          <input placeholder="Name" {...name}/>
        </>
    );
};

export default App;


// ### useInput  two ###
// import { useState } from "react";

// const useInput = (initialValue, validator) => {
//     const [ value, setValue ] = useState(initialValue);
//     const onChange = event => {
//         const {
//             target : { value }
//         } = event;
//         let willupdate = true;
//         if(typeof validator === "function"){
//             willupdate = validator(value);
//         }
//         if(willupdate){
//             setValue(value);
//         }
//     };
//     return {value, onChange};
// };
// // validator가 true라면 willUpdata는 true가 되서 실행될 것이고, value를 세팅 할 수 있음 

// const App = () => {
//     // const maxLen = (value) => value.length <= 10;
//     const maxLen = (value) => !value.includes("@");
//     const name = useInput("MR.", maxLen);
//     return (
//         <>
//         <div>
//           <input {...name}/>
//           {/* value={name.value} === {...name} */}
//           <input placeholder="Name" {...name}/>
//         </div>
//         </>
//     );
// };

// export default App;

