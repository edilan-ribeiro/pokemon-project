import { Main } from "./MainContainer.Styles/Main.Style"
import { Header } from "./MainContainer.Styles/Header.Style"
import { BackButton } from "./MainContainer.Styles/BackButton.Style"
import { BiArrowBack } from "react-icons/bi"
import pokelogo from "../../../public/images/project/poke-logo.svg"
import { TogglerButton } from "../ThemeToggler/TogglerButton"
import { Section } from "./MainContainer.Styles/Section.Style"
import { Link, useLocation } from "react-router-dom"
import { Footer } from "./MainContainer.Styles/Footer.Style"

export const MainContainer = ({ children }) => {
	const location = useLocation()

	return (
		<>
			<Main>
				<Header>
					{location.pathname !== "/" && (
						<Link to="/">
							<BackButton title="Return to the home page">
								<BiArrowBack />
							</BackButton>
						</Link>
					)}

					<Link to="/">
						<img src={pokelogo} alt="Pokemon logo" />
					</Link>
					<TogglerButton />
				</Header>

				<Section>{children}</Section>
			</Main>
			<Footer>
				Made by <a href="https://edilan-ribeiro.github.io/my-portfolio/" target="_blank">Edilan Ribeiro</a>
			</Footer>
		</>
	)
}
