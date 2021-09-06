export const useTabs = (init, allTabs) =>{
    const [currentIndex, setCurrentIndex] = useState(init);
    if(!allTabs || !Array.isArray(allTabs)){
      return;
    }
    return{
      currentItem: allTabs[currentIndex],
      changeItem: setCurrentIndex
    }
  };