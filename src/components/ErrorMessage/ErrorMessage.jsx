import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { DetailsOfError } from "./ErrorMessage.Styles"


export const ErrorMessage = ({children}) => {

    const {theme} = useContext(ThemeContext)

    return (
        <DetailsOfError theme={theme}>{...children}</DetailsOfError>
    )
}