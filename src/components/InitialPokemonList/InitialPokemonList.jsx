import { Link } from "react-router-dom"
import { WrapperUl } from "../HomeCards/HomeCards.Styles/WrapperUl.Style"
import { CardsFace } from "../HomeCards/HomeCards.Styles/CardsFace.Style"
import { ImageWrapper } from "../HomeCards/HomeCards.Styles/ImageWrapper.style"
import { InfoWrapper } from "../HomeCards/HomeCards.Styles/InfoWrapper.Style"
import { getImageUrl } from "../../utils/pokeImageUrl"
import { useEffect, useContext } from "react"
import { ThemeContext } from "../../contexts/ThemeContext"
import { pokemonList, pokemonDetails } from "../../services/poke-api"
import { numberFill } from "../../utils/numberFill"
import { TypesList } from "../TypesList/TypesList.Styles"
import { LoadMoreButton } from "./LoadMoreButton/LoadMoreButton"



export const InitialPokemonList = ({ pokeNames, setPokeNames, pokeDetails, setPokeDetails, setIsLoading }) => {
	
	const { theme } = useContext(ThemeContext)

	useEffect(() => {		
		const getListData = async () => {			
			const pokeApiList = await pokemonList()
			const pokeNameList = pokeApiList.results

			setPokeNames(pokeNameList)
		
		}
		getListData()
		
	}, [])

	useEffect(() => {
		if (pokeNames.length > 0 && pokeDetails.length === 0) {
				setIsLoading(true)
			const getDetailsData = async () => {
				const pokeDetailsList = await Promise.all(
					pokeNames.map((pokeAdress) => pokemonDetails(pokeAdress.name))
				)
				setPokeDetails(pokeDetailsList)
				setTimeout(() => {
					setIsLoading(false) 
				}, 1500); 
			}
			getDetailsData()
		}
		else{
			return
		}
	}, [pokeNames], [pokeDetails])

	return (
		<>
			<WrapperUl>
				{pokeDetails.map((poke, index) => {
					return (
						<CardsFace type={poke.types[0].type.name} theme={theme} key={index}>
							<Link to={`${poke.name}`}>								
									<h1>#{numberFill(poke.id, 3)}</h1>
									<ImageWrapper>
										<img
											src={getImageUrl(poke.id)}
											alt={`${poke.name} image`}
										/>
									</ImageWrapper>
									<InfoWrapper>
										<h2>{poke.name}</h2>
										<ul>
											{poke.types.map((pokeType, index) => (
												<TypesList key={index} type={pokeType.type.name}>
													{pokeType.type.name}
												</TypesList>
											))}
										</ul>
									</InfoWrapper>								
							</Link>
						</CardsFace>						
					)
				})}
			</WrapperUl>

			<LoadMoreButton setPokeNames={setPokeNames}/>
		</>
	)
}
