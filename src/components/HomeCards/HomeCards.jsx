import { useState, useContext } from "react"
import { FilterWrapper } from "./HomeCards.Styles/SearchWrapper"
import { PokeSearch } from "../PokeSearch/PokeSearch"
import { ThemeContext } from "../../contexts/ThemeContext"
import { SearchCard } from "../PokeSearch/SearchCard/SearchCard"
import { TypeFilter } from "../TypeFilter/TypeFilter"
import { TypeFilterCards } from "../TypeFilter/TypeFilterCards/TypeFilterCards"
import { InitialPokemonList } from "../InitialPokemonList/InitialPokemonList"
import { useSpring, animated  } from "@react-spring/web";
import { LoadingData } from "../LoadingData/LoadingData"

export const HomeCards = () => {
	const { theme } = useContext(ThemeContext)

	const [ pokeNames, setPokeNames ] = useState([])
	const [ pokeDetails, setPokeDetails ] = useState([])	
	const [ searchData, setSearchData ] = useState("")
	const [ typeFilter, setTypeFilter ] = useState([])
	const [ typeDetails, setTypeDetails ] = useState([])
	const [ isLoading, setIsLoading] = useState(false)

	const cardAnimation = useSpring({
		from: { opacity: 0 },
		to: { opacity: 1 },
		config: {
			duration: 800
		 }
	  })
 
	  
	return (
		<animated.div style={{...cardAnimation, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
			<FilterWrapper theme={theme}>
				<p>Filter Pokémon by type</p>
				<TypeFilter setTypeFilter={setTypeFilter} searchData={searchData} setSearchData={setSearchData} setIsLoading={setIsLoading}/>
				<p>Or search a specific Pokémon</p>
				<PokeSearch setSearchData={setSearchData} setTypeFilter={setTypeFilter} setIsLoading={setIsLoading}/>
			</FilterWrapper>

			{(searchData !== '' && typeFilter.length === 0 && isLoading === false) && 
			<SearchCard 
				searchData={searchData} 
				setSearchData={setSearchData}
				setTypeFilter={setTypeFilter}
			/>}

			{(typeFilter.length > 0 && searchData === '' && isLoading === false) && 
			<TypeFilterCards 
					typeFilter={typeFilter} 
					typeDetails={typeDetails} 
					setTypeDetails={setTypeDetails}
			/>}

			{(typeFilter.length === 0 && searchData === '' && isLoading === false) && 
			<InitialPokemonList
					pokeNames={pokeNames}
					setPokeNames={setPokeNames}
					pokeDetails={pokeDetails}
					setPokeDetails={setPokeDetails}
			/>}			
			
			{isLoading && <LoadingData />}
		</animated.div>		
	)
}
