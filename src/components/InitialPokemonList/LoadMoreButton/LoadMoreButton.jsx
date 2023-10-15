import { useState, useContext } from "react"
import UseAnimations from "react-useanimations"
import loading from "react-useanimations/lib/loading"
import { HomeButton } from "../../HomeButton/HomeButton"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { pokemonList } from "../../../services/poke-api"


export const LoadMoreButton = ( {setPokeNames} ) => {

    const { theme } = useContext(ThemeContext)

	const [nextPokeDetails, setnextPokeDetails] = useState(0)
	const [isLoadingMore, setIsLoadingMore] = useState(false)

	const loadNextPokemonSet = async () => {
		setIsLoadingMore(true)
		const newOffsetValue = nextPokeDetails + 12
		const pokeApiList = await pokemonList(newOffsetValue)
		const pokeNameList = pokeApiList.results
		setPokeNames((prevPokeNames) => [...prevPokeNames, ...pokeNameList])
		setnextPokeDetails(newOffsetValue)
		setIsLoadingMore(false)
	}

	return (
		<HomeButton handleClick={loadNextPokemonSet} theme={theme}>
			load more pokémons{" "}
			{isLoadingMore && (
				<UseAnimations animation={loading} size={20} strokeColor={"#FFF"} />
			)}
		</HomeButton>
	)
}
