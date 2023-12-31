import { createContext, useState, useEffect } from "react"
import { themes } from "../styles/themes"

export const ThemeContext = createContext({})

export const ThemeProvider = ({children}) => {

    const getInitialTheme = () => {
        try { 
            const theme = localStorage.getItem('theme')
            return theme ? JSON.parse(theme) : themes.light
        } catch{
            localStorage.removeItem('theme')
            return themes.light
        }
    }

    const [ theme, setTheme ] = useState(getInitialTheme)

	useEffect(() => {
		localStorage.setItem('theme', JSON.stringify(theme));
	  }, [theme]);
    
    return(
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}