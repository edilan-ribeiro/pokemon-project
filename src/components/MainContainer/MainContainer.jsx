import { Main } from "./MainContainer.Styles/Main.Style"
import { Header } from "./MainContainer.Styles/Header.Style"
import { BackButton } from "./MainContainer.Styles/BackButton.Style"
import { BiArrowBack } from "react-icons/bi"
import pokelogo from "/images/project/poke-logo.svg"
import { TogglerButton } from "../ThemeToggler/TogglerButton"
import { Section } from "./MainContainer.Styles/Section.Style"
import { Link, useLocation } from "react-router-dom"
import { Footer } from "./MainContainer.Styles/Footer.Style"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { BackgroundContainer } from "./MainContainer.Styles/BackgroundContainer"


export const MainContainer = ({ children }) => {
	const location = useLocation()

	const { theme } = useContext(ThemeContext);

	return (
		<BackgroundContainer theme={theme}>
			<Main>
				<Header>
					{location.pathname !== "/" && (
						<Link to="/">
							<BackButton title="Return to the list">
								<BiArrowBack />
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
			<Footer>
				Made by <a href="https://edilan-ribeiro.github.io/my-portfolio/" target="_blank">Edilan Ribeiro</a>
			</Footer>
		</BackgroundContainer>
	)
}
