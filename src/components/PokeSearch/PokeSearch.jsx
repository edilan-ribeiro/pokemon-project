import { FcSearch } from "react-icons/fc"
import { FieldWrapper, SearchForm, SearchField, SearchButton} from "./PokeSearch.Styles"
import { useForm } from "react-hook-form"
import { pokemonDetails } from "../../services/poke-api"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const createSearchSchema = z.object({
	search: z
		.string()
		.min(1, "The field is empty")
		.refine((value) => value !== "0", "There is no pokemon with id 0")
		.refine(value => !value.includes(' '), "PokeApi doesn't allow spaces in name, try to use a hyphen instead! Example: mr-mime")
		.refine(
			(value) =>
				/^\d+$/.test(value)
					? ((currentNumber) => {
							return (
								!isNaN(currentNumber) &&
								currentNumber >= 1 &&
								currentNumber <= 1017
							)
					  })(Number(value))
					: value,
			{ message: "Must be a number between 1 and 1017" }
		)
		.refine(value => !value.startsWith("0"), "Pokemon IDs should not start with 0,\n try removing the initial zeroes")
})

export const PokeSearch = ({ setSearchData, setTypeFilter, setIsLoading }) => {

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
		clearErrors	
	} = useForm({
			resolver: zodResolver(createSearchSchema),
		})

	const getPokemon = async (data) => {
		try {
			setIsLoading(true)
			const pokemon = await pokemonDetails(data.search.toLowerCase())
			setSearchData(pokemon)
			setTypeFilter([])
			setTimeout(() => {
				setIsLoading(false) 
			}, 1500)
		} catch (error) {
			setError('search',{
				type: 'manual',
				message:'Pokémon not found or api failed, try another Id or Name.\n The search must be exact!\n Example: mr-mime returns Mr Mime'
			})
			setTimeout(() => {
				setIsLoading(false) 
			}, 1000)
		}
	}
	
	return (
		<SearchForm onSubmit={handleSubmit(getPokemon)}>
			<FieldWrapper>
				<SearchField
					type="text"
					placeholder="Type a pokémon Name or Number"
					{...register("search")}
					onBlur={() =>
							setTimeout(() => 
								clearErrors()
								, 6000)
						    }
				/>
				<SearchButton type="submit">
					<FcSearch />
				</SearchButton>
			</FieldWrapper>
			{errors.search && <span>{errors.search.message}</span>}
		</SearchForm>
	)
}