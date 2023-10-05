import { useEffect, useState } from "react"
import { pokemonList, pokemonDetails } from "../../services/poke-api"
import { Wrapper } from "./HomeCards.Styles/Wrapper.Style"
import { CardsFace } from "./HomeCards.Styles/CardsFace.Style"
import { ImageWrapper } from "./HomeCards.Styles/ImageWrapper.style"
import { InfoWrapper } from "./HomeCards.Styles/InfoWrapper.Style"
import { GeneralButton } from "../GeneralButton/GeneralButton"

// console.log("123", await pokemonList())
// console.log("122", await pokemonDetails(5))

export const HomeCards = () => {
	const [pokeNames, setPokeNames] = useState([])
	const [pokeDetails, setPokeDetails] = useState([])
	const [nextPokeDetails, setnextPokeDetails] = useState(0)

	useEffect(() => {
		

		const getListData = async () => {
			const pokeApiList = await pokemonList()
			const pokeNameList = pokeApiList.results

			setPokeNames(pokeNameList)
		}

		getListData()
	}, [])

	useEffect(() => {
		const getDetailsData = async () => {
			const pokeDetailsList = await Promise.all(
				pokeNames.map((pokeAdress) => pokemonDetails(pokeAdress.name))
			)
			setPokeDetails(pokeDetailsList)
		}

		getDetailsData()
	}, [pokeNames])


	const loadNextPokemon = async () => {
		const offset = nextPokeDetails + 10
		const pokeApiList = await pokemonList(offset)
		const pokeNameList = pokeApiList.results
		setPokeNames(prevPokeNames => [...prevPokeNames, ...pokeNameList])
		setnextPokeDetails(pokeApiList.next)
		setnextPokeDetails(offset)
	}


	return (
		<>
			<Wrapper>
				{pokeDetails.map((poke, index) => {
					const pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`

					return (
						<div key={index}>
							<CardsFace>
								<ImageWrapper>
									<img src={pokeImgUrl} alt={poke.name} />
								</ImageWrapper>

								<InfoWrapper>
									<h2>
										<span>Number {poke.id}</span>
										<br />
										{poke.name}
									</h2>
									<p>
										{poke.types.map((pokeType, index) => (
											<span key={index}>{pokeType.type.name} </span>
										))}
									</p>
								</InfoWrapper>
							</CardsFace>
						</div>
					)
				})}
			</Wrapper>
			<GeneralButton handleClick={loadNextPokemon}>load more pokémons</GeneralButton>
		</>
	)
}