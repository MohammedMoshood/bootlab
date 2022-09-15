import React , {useState , useContext} from "react"

const AppContext = React.createContext() ;

export const AppProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(true);
  };

  const toggleClose = () => {
    setIsOpen(false);
  }

  return <AppContext.Provider 
  value={{
    isOpen , toggleOpen  , toggleClose
  }}
  >{children}</AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}