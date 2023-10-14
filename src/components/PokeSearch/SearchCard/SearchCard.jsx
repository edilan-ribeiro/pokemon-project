import { useContext } from "react"
import { CardsFace } from "../../HomeCards/HomeCards.Styles/CardsFace.Style"
import { WrapperUl } from "../../HomeCards/HomeCards.Styles/WrapperUl.Style"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { numberFill } from "../../../utils/numberFill"
import { InfoWrapper } from "../../HomeCards/HomeCards.Styles/InfoWrapper.Style"
import { ImageWrapper } from "../../HomeCards/HomeCards.Styles/ImageWrapper.style"
import { TypesList } from "../../TypesList/TypesList.Styles"
import { HomeLoadButton } from "../../HomeLoadButton/HomeLoadButton"
import { Link } from "react-router-dom"

export const SearchCard = ({ searchData, setSearchData }) => {
	const { theme } = useContext(ThemeContext)

	function listReset() {
		setSearchData("")
	}

	return (
		<>
			<Link to={`${searchData.name}`}>
				<WrapperUl>
					<CardsFace type={searchData.types[0].type.name} theme={theme}>
						<h1>#{numberFill(searchData.id, 3)}</h1>

						<ImageWrapper>
							<img
								src={
									searchData.id < 648
										? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${searchData.id}.svg`
										: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${searchData.id}.png`
								}
								alt={`${searchData.name} image`}
							/>
						</ImageWrapper>

						<InfoWrapper>
							<h2>{searchData.name}</h2>
							<ul>
								{searchData.types.map((pokeType, index) => (
									<TypesList key={index} type={pokeType.type.name}>
										{pokeType.type.name}
									</TypesList>
								))}
							</ul>
						</InfoWrapper>
					</CardsFace>
				</WrapperUl>
			</Link>

			<HomeLoadButton handleClick={listReset} theme={theme}>
				Return to pokémon list
			</HomeLoadButton>
		</>
	)
}
