import { useContext } from "react"
import { LoadingWrapper } from "./LoadingData.Styles"
import { ThemeContext } from "../../contexts/ThemeContext"
import UseAnimations from "react-useanimations"
import loading from "react-useanimations/lib/loading"

export const LoadingData = () => {

    const { theme } = useContext(ThemeContext)

    return(
        <LoadingWrapper theme={theme}>
            <h2>Fetching some Pokémon for you</h2>
            <UseAnimations animation={loading} size={20} strokeColor={theme.color} />
        </LoadingWrapper>
    )
}