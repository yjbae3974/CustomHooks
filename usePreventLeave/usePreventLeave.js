export const usePreventLeave = () => {
    const listener = (event) =>{
      event.preventDefault();
      event.returnValue = "";
    }
    const enablePrevent =() =>{
      return window.addEventListener("beforeunload",listener)
    }
    const disablePrevent = () =>{
      return window.removeEventListener("beforeunload",listener)
    }
    return {enablePrevent,disablePrevent}
  }