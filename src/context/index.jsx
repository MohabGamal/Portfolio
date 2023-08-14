import { createContext, useContext, useState } from "react"

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
  const [appLoaded, setAppLoaded] = useState(false)
  return (
    <StateContext.Provider value={{ appLoaded, setAppLoaded }}>
      {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext)