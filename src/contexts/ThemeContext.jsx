import { createContext, useState } from "react"
import { themes } from "../styles/themes"



export const ThemeContext = createContext({})

export const ThemeProvider = ({children}) => {

    const [ theme, setTheme ] = useState(themes.light)
    
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}