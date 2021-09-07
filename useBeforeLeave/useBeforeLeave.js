export const useBeforeLeave = (onBefore) => {
    if(typeof onBefore !== "function"){
      return;
    }
    const handle = (event) =>{
      const {clientY, clientX} = event; //이런식으로 event객체내부 속성 가져올 수 있음.콘솔로그 없애셈.
      console.log(clientX)
      if(clientY <= 0){
        onBefore();
      }
      console.log(event)
    }
    useEffect(()=>{
      document.addEventListener("mouseleave",handle);
      return () => document.removeEventListener("mouseleave",handle)
    },[])
  }