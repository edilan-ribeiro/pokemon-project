import { useState, useContext } from "react"
import { FilterWrapper } from "./HomeCards.Styles/SearchWrapper"
import { PokeSearch } from "../PokeSearch/PokeSearch"
import { ThemeContext } from "../../contexts/ThemeContext"
import { SearchCard } from "../PokeSearch/SearchCard/SearchCard"
import { TypeFilter } from "../TypeFilter/TypeFilter"
import { TypeFilterCards } from "../TypeFilter/TypeFilterCards/TypeFilterCards"
import { InitialPokemonList } from "../InitialPokemonList/InitialPokemonList"

export const HomeCards = () => {
	const { theme } = useContext(ThemeContext)

	const [ pokeNames, setPokeNames ] = useState([])
	const [ pokeDetails, setPokeDetails ] = useState([])	
	const [ searchData, setSearchData ] = useState("")
	const [ typeFilter, setTypeFilter ] = useState([])
	const [ typeDetails, setTypeDetails ] = useState([])

	return (
		<>
			<FilterWrapper theme={theme}>
				<p>Filter Pokémon by type</p>
				<TypeFilter setTypeFilter={setTypeFilter} searchData={searchData} setSearchData={setSearchData}/>
				<p>Or search a specific Pokémon</p>
				<PokeSearch setSearchData={setSearchData} setTypeFilter={setTypeFilter}/>
			</FilterWrapper>

			{(searchData !== '' && typeFilter.length === 0) && 
			<SearchCard 
				searchData={searchData} 
				setSearchData={setSearchData}
				setTypeFilter={setTypeFilter}
			/>}

			{(typeFilter.length > 0 && searchData === '') && 
			<TypeFilterCards 
					typeFilter={typeFilter} 
					typeDetails={typeDetails} 
					setTypeDetails={setTypeDetails}					
			/>}

			{(typeFilter.length === 0 && searchData === '') && 
			<InitialPokemonList 
					pokeNames={pokeNames}
					setPokeNames={setPokeNames}
					pokeDetails={pokeDetails}
					setPokeDetails={setPokeDetails} 					
			/>}			
		</>
	)
}
