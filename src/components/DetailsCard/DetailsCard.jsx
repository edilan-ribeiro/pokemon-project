import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { pokemonAbilities, pokemonDetails } from "../../services/poke-api"
import { DetailsCardContainer } from "./DetailsCard.Styles/DetailsCardContainer.Style"
import { MainImage } from "./DetailsCard.Styles/MainImage.Style.jsx"
import { RightSide } from "./DetailsCard.Styles/RightSide.Style"
import { AbilitiesContainer } from "./DetailsCard.Styles/AbilitiesContainer.Style"
import { NameTypeContainer } from "./DetailsCard.Styles/NameTypeContainer.Style"
import { numberFill } from "../../utils/numberFill"
import { MovesContainer } from "./DetailsCard.Styles/MovesContainer.Style"
import { TypesList } from "../TypesList/TypesList.Styles"
import {VscTriangleDown} from 'react-icons/vsc'
import { SkillInfoToggler } from "./DetailsCard.Styles/SkillInfoToggler"

export const DetailsCard = () => {
	const locationName = useLocation()
	const currentPokeName = locationName.pathname.slice(1)

	let skillsName = []

	const [pokeData, setPokeData] = useState({})
	const [dataCheck, setDataCheck] = useState(false)
	const [skillInfo, setSkillInfo] = useState([])
	const [skillDisplayInfo, setSkillDisplayInfo] = useState([])

	useEffect(() => {
		const getPokeData = async () => {
			const currentPokemon = await pokemonDetails(currentPokeName)

			setPokeData(currentPokemon)
			setDataCheck(true)
		}

		getPokeData()
	}, [])


	useEffect(() => {
		if (dataCheck) {
			const getSkillsData = async () => {
				const currentSkillData = skillsName.map(currentSkill =>
					pokemonAbilities(currentSkill)
				)

				const skillData = await Promise.all(currentSkillData)

				const skillText = skillData.map((data) => {
					const englishText = data.effect_entries.find(
						(entry) => entry.language.name === 'en'
					)
					return englishText ? englishText.effect : 'English text not found'
				})

				setSkillInfo(skillText)
			}

			getSkillsData()
		}
	}, [dataCheck])

	function handleClick(index) {
		setSkillDisplayInfo(prevState => {
			if (prevState.includes(index)) {
				return prevState.filter(i => i !== index)
			} else {
				return [...prevState, index]
			}
		})
	}


	let pokeDetailsImg
	
		pokeData.id < 648 
		? pokeDetailsImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeData.id}.svg`
		: pokeDetailsImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`
		

	return (
		<>
			{dataCheck && (				
				<DetailsCardContainer>
					<MainImage type={pokeData.types[0].type.name}>
						<img
							src={pokeDetailsImg}
							alt={`${currentPokeName} image`}
						/>
					</MainImage>

					<RightSide>
						<NameTypeContainer>
							<div>
								<h1> #{numberFill(pokeData.id, 3)}</h1>
								<h2>{currentPokeName}</h2>
							</div>
							<ul>
								{pokeData.types.map((pokeTypes, index) => (
									<TypesList type={pokeTypes.type.name} key={index}>{pokeTypes.type.name} </TypesList>
								))}
							</ul>
					</NameTypeContainer>


						
							<AbilitiesContainer>
								<h3>Abilities</h3>
								<ul>
									{pokeData.abilities.map((pokeSkills, index) => {
										let skillName = pokeSkills.ability.name

										skillsName.push(skillName)

										return (
											<li key={index}>
												<p onClick={() => handleClick(index)}>
														{skillName}
														<SkillInfoToggler
															$isSkillOpen={skillDisplayInfo.includes(index)}>
															<VscTriangleDown />
														</SkillInfoToggler>
												</p>
												{
												skillDisplayInfo.includes(index) &&
												<p>{skillInfo[index]}</p>
												}
											</li>
										)
									})}
								</ul>
							</AbilitiesContainer>
							
							
							<h3>Moves</h3>

							<MovesContainer>
								<ul>
									{pokeData.moves.map((pokeMoves, index) => (
										<li key={index}>{pokeMoves.move.name}</li>
									))}
								</ul>
							</MovesContainer>
						
					</RightSide>
				</DetailsCardContainer>
			)}
		</>
	)
}