import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { pokemonDetails } from "../../services/poke-api"
import { DetailsCardContainer } from "./DetailsCard.Styles/DetailsCardContainer.Style"
import { LeftSide } from "./DetailsCard.Styles/LeftSide.Styles.Jsx"
import { RightSide } from "./DetailsCard.Styles/RightSide.Styles"
import { AbilitiesContainer } from "./DetailsCard.Styles/AbilitiesContainer.Styles"
import { NameTypeContainer } from "./DetailsCard.Styles/NameTypeContainer.Stles"
import { numberFill } from "../../utils/numberFill"
import { MovesContainer } from "./DetailsCard.Styles/MovesContainer.Styles"

export const DetailsCard = () => {
	const locationName = useLocation()
	const currentPokeName = locationName.pathname.slice(1)

	const [pokeData, setPokeData] = useState({})

	useEffect(() => {
		const getPokeData = async () => {
			const currentPokemon = await pokemonDetails(currentPokeName)

			setPokeData(currentPokemon)
		}

		getPokeData()
	}, [])

	const fetchIsFinished = Object.keys(pokeData).length > 0
	console.log(pokeData)

	// pokeData.abilities[1].ability.name

	return (
		<>
			{fetchIsFinished && (
				<DetailsCardContainer>
					<LeftSide>
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeData.id}.svg`}
							alt={`${currentPokeName} image`}
						/>
					</LeftSide>

					<RightSide>
						<NameTypeContainer>
							<h2>
								{currentPokeName}
								<span> #{numberFill(pokeData.id, 3)}</span>
							</h2>
							<ul>
								{pokeData.types.map((pokeTypes, index) => (
									<li key={index}>{pokeTypes.type.name} </li>
								))}
							</ul>
						</NameTypeContainer>

						<AbilitiesContainer>
							<h3>Abilities:</h3>
							<ul>
								{pokeData.abilities.map((pokeSkills, index) => (
									<li key={index}>
										<p>{pokeSkills.ability.name} <span> ?{/* se clicado mostrar um card de ability info */}</span></p> 
										{/* <p>ability info HOVER</p> */}
										{/* card paragrafo de ability info */}
									</li>
								))}
							</ul>
						</AbilitiesContainer>

                        

						<MovesContainer>
							<h3>Moves:</h3>
							<ul>
                                {pokeData.moves.map((pokeMoves, index) =>
                                
								<li 
                                    key={index}>                        
                                    {pokeMoves.move.name}
                                </li>
                                )}
							</ul>
                            {
							    <button>Show all moves</button>
                            }
							{/* FUTURO mostrar todos se clicado */}
						</MovesContainer>
					</RightSide>
				</DetailsCardContainer>
			)}
		</>
	)
}
