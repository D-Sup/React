export const useInput = (initialValue, validator) => {
    const [ value, setValue ] = useState(initialValue);
    const onChange = event => {
        const {
            target : { value }
        } = event;
        let willupdate = true;
        if(typeof validator === "function"){
            willupdate = validator(value);
        }
        if(willupdate){
            setValue(value);
        }
    };
    return {value, onChange};
};