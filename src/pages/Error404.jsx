import { ErrorMessage } from "../components/ErrorMessage/ErrorMessage"
import { MainContainer } from "../components/MainContainer/MainContainer"


export const Error404 = () => {
	return (
		<MainContainer>
			<ErrorMessage>
                ERROR 404 <br/>
                <p>The Pokémon you are looking for is in another pokeball. <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png" alt="image of apokeball" /></p>
            </ErrorMessage>
		</MainContainer>
	)
}