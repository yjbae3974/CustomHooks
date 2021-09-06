export const useInput = (init,val)=>{
    const [value,setValue]=useState(init);
    const onChange = event =>{
      const {
        target: {value}
      } = event;
      let willUpdate = true;
      if(typeof val === "function"){
        willUpdate = val(value);
      }
      if(willUpdate){
        setValue(value);
      }
    };
    return {value, onChange};
  }