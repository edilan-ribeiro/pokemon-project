import { useContext, useState } from "react"
import { Switch, TogglerInput, Moon, Sun } from "./TogglerButton.Styles"
import { FaSun, FaMoon } from "react-icons/fa"
import { ThemeContext } from "../../contexts/ThemeContext"
import { themes } from "../../styles/themes"

export const TogglerButton = () => {
	const { theme, setTheme } = useContext(ThemeContext)

	const [isChecked, setIsChecked] = useState(false)

	const handleCheck = () => {
		setIsChecked(!isChecked)
	}


	return (
		<Switch htmlFor="toggler" theme={theme}>
			<TogglerInput
				type="checkbox"
				name="toggler"
				id="toggler"
				onChange={handleCheck}
				onClick={() =>
					setTheme(theme === themes.light ? themes.dark : themes.light)
				}
		    />
			<Moon>
				<FaMoon />
			</Moon>
			<Sun>
				<FaSun />
			</Sun>
		</Switch>
	)
}