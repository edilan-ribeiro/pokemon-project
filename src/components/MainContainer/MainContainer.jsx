import { Main } from "./MainContainer.Styles/Main.Style"
import { Header } from "./MainContainer.Styles/Header.Style"
import { BackButton } from "./MainContainer.Styles/BackButton.Style"
import { BiArrowBack } from "react-icons/bi"
import pokelogo from "../../../public/images/project/poke-logo.svg"
import { TogglerButton } from "../ThemeToggler/TogglerButton"
import { Section } from "./MainContainer.Styles/Section.Style"
import { Link, useLocation } from "react-router-dom"

export const MainContainer = ({ children }) => {
	const location = useLocation()

	return (
		<Main>
			<Header>
				{location.pathname !== "/" && (
					<Link to="/">
						<BackButton title="Return to the home page">
							<BiArrowBack /> Back
						</BackButton>
					</Link>
				)}

				<Link to="/">
					<img src={pokelogo} alt="Pokemon logo" />
				</Link>
				<TogglerButton />
			</Header>

				<Section>
					{children}
				</Section>
			
		</Main>
	)
}
