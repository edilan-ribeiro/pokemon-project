import { useContext } from "react"
import { Switch, TogglerInput, Moon, Sun } from "./TogglerButton.Styles"
import { FaSun, FaMoon } from "react-icons/fa"
import { ThemeContext } from "../../contexts/ThemeContext"
import { themes } from "../../styles/themes"

export const TogglerButton = () => {

	const { theme, setTheme } = useContext(ThemeContext)

	console.log(theme)

	return (
		<Switch htmlFor="toggler" theme={theme} >
			<TogglerInput
				type="checkbox"
				name="toggler"
				id="toggler"				
				onClick={() =>
					setTheme(theme === themes.light ? themes.dark : themes.light)
				}
		    />
			<Moon theme={theme}>
				<FaMoon />
			</Moon>
			<Sun theme={theme}>
				<FaSun />
			</Sun>
		</Switch>
	)
}