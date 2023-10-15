import { Link } from "react-router-dom"
import { WrapperUl } from "../../HomeCards/HomeCards.Styles/WrapperUl.Style"
import { CardsFace } from "../../HomeCards/HomeCards.Styles/CardsFace.Style"
import { ImageWrapper } from "../../HomeCards/HomeCards.Styles/ImageWrapper.style"
import { InfoWrapper } from "../../HomeCards/HomeCards.Styles/InfoWrapper.Style"
import { TypesList } from "../../TypesList/TypesList.Styles"
import { useEffect, useContext } from "react"
import { pokemonDetails } from "../../../services/poke-api"
import { ThemeContext } from "../../../contexts/ThemeContext"
import { numberFill } from "../../../utils/numberFill"
import { getImageUrl } from "../../../utils/pokeImageUrl"


export const TypeFilterCards = ({ typeFilter, typeDetails, setTypeDetails }) => {

	const { theme } = useContext(ThemeContext)
    
	useEffect(() => {
		if (typeFilter.length < 0) {
			return 
		} else {
			const getTypeDetails = async () => {
				const pokesWithType = await Promise.all(
					typeFilter.map(selectedPokes => pokemonDetails(selectedPokes.name)))
				setTypeDetails(pokesWithType)
			}
			getTypeDetails()			
		}
	},[typeFilter])

    return(
       <WrapperUl>
				{typeDetails.map((poke, index) => {
					return (
						<div key={index}>
							<Link to={`${poke.name}`}>
								<CardsFace type={poke.types[0].type.name} theme={theme}>

									<h1>#{ numberFill(poke.id, 3) }</h1>

									<ImageWrapper>
										<img src={getImageUrl(poke.id)} alt={`${poke.name} image`} />
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
			</WrapperUl>
    )
}