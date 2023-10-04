import { Main } from "./MainContainerStyles/Main.Style"
import { Header } from "./MainContainerStyles/Header.Style"
import { BackButton } from "./MainContainerStyles/BackButton"
import { BiArrowBack } from "react-icons/bi"
import pokelogo from "../../../public/images/project/poke-logo.svg"
import { TogglerButton } from "../ThemeToggler/TogglerButton"
import { Section } from "./MainContainerStyles/Section.Style"
import { Link, useLocation } from "react-router-dom"

export const MainContainer = ({ children }) => {
	const location = useLocation()
	
	return (
		<Main>
			<Header>
				{location.pathname === "/pokemon-DD" && (
					<Link to="/">
						<BackButton title="Return to the home page">
							<BiArrowBack />
						</BackButton>
					</Link>
				)}

				<a href="/">
					<img src={pokelogo} alt="Pokemon logo" />
				</a>
				<TogglerButton />
			</Header>

			<Section>
				{children}
			</Section>
		</Main>
	)
}
