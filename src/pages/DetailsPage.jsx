import { DetailsCard } from "../components/DetailsCard/DetailsCard"
import { MainContainer } from "../components/MainContainer/MainContainer"
import { pokemonDetails } from "../services/poke-api"

export const DetailsPage = () => {
	return (
		<MainContainer>
			<DetailsCard />
		</MainContainer>
	)
}