import { GeneralButton } from "../components/GeneralButton/GeneralButton"
import { MainContainer } from "../components/MainContainer/MainContainer"
import { pokemonList, pokemonDetails } from "../services/poke-api"

console.log(await pokemonList())
console.log(await pokemonDetails())

export const HomePage = () => {
	return (
		<MainContainer>
			<ul>
				<li>
					<p>MAIN CARDS</p>
				</li>
			</ul>
			<GeneralButton>
				load more pokémons
			</GeneralButton>
		</MainContainer>
	)
}