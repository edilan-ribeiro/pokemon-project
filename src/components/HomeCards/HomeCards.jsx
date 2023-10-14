import { useEffect, useState, useContext } from "react"
import { pokemonList, pokemonDetails } from "../../services/poke-api"
import { WrapperUl } from "./HomeCards.Styles/WrapperUl.Style"
import { CardsFace } from "./HomeCards.Styles/CardsFace.Style"
import { ImageWrapper } from "./HomeCards.Styles/ImageWrapper.style"
import { InfoWrapper } from "./HomeCards.Styles/InfoWrapper.Style"
import { HomeLoadButton } from '../HomeLoadButton/HomeLoadButton'
import { Link } from "react-router-dom"
import { numberFill } from "../../utils/numberFill"
import { TypesList } from "../TypesList/TypesList.Styles"
import { FilterWrapper } from "./HomeCards.Styles/SearchWrapper"
import { PokeSearch } from "../PokeSearch/PokeSearch"
import UseAnimations from "react-useanimations";
import loading from 'react-useanimations/lib/loading'
import { ThemeContext } from "../../contexts/ThemeContext"
import { SearchCard } from "../SearchCard/SearchCard"
import { TypeForm } from "../TypeForm/TypeForm"


export const HomeCards = () => {

	const { theme } = useContext(ThemeContext)

	const [pokeNames, setPokeNames] = useState([])
	const [pokeDetails, setPokeDetails] = useState([])
	const [nextPokeDetails, setnextPokeDetails] = useState(0)
	const [isLoadingMore, setIsLoadingMore] = useState(false);

	const [ searchData, setSearchData ] = useState('')

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
		setIsLoadingMore(true)
		const newOffsetValue = nextPokeDetails + 12
		const pokeApiList = await pokemonList(newOffsetValue)
		const pokeNameList = pokeApiList.results
		setPokeNames((prevPokeNames) => [...prevPokeNames, ...pokeNameList])
		setnextPokeDetails(newOffsetValue)
		setIsLoadingMore(false)
	}



	return (
		<>
			<FilterWrapper theme={theme}>
				<p>Filter Pokémon by type</p>
				<TypeForm />
				<p>Or search a specific Pokémon</p>
				<PokeSearch setSearch={setSearchData}/>
			</FilterWrapper>

			{searchData !== '' && <SearchCard searchData={searchData} setSearchData={setSearchData}/>}
			

			{searchData === '' && <WrapperUl>
				{pokeDetails.map((poke, index) => {

					let pokeImgUrl
					
					poke.id < 648 
					? pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${poke.id}.svg`
					: pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`
					

					return (
						<div key={index}>
							<Link to={`${poke.name}`}>
								<CardsFace type={poke.types[0].type.name} theme={theme}>

									<h1>#{ numberFill(poke.id, 3) }</h1>

									<ImageWrapper>
										<img src={pokeImgUrl} alt={`${poke.name} image`} />
									</ImageWrapper>

									<InfoWrapper>
										<h2>
											{poke.name}
										</h2>
										<ul>
											{poke.types.map((pokeType, index) => (
												<TypesList key={index} type={pokeType.type.name}>
													{pokeType.type.name}
												</TypesList>
											))}
										</ul>
									</InfoWrapper>
								</CardsFace>
							</Link>
						</div>
					)
				})}
			</WrapperUl>}

			{searchData === '' && <HomeLoadButton handleClick={loadNextPokemon} theme={theme}>
				load more pokémons {isLoadingMore && <UseAnimations animation={loading} size={20} strokeColor={'#FFF'}/>}
			</HomeLoadButton>}
		</>
	)
}