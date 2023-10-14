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
		.refine((value) => value !== "0", {
			message: "There is no pokemon with id 0",
		})
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
})

export const PokeSearch = ({ setSearch }) => {

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
			const pokemon = await pokemonDetails(data.search.toLowerCase())
			setSearch(pokemon)			
		} catch (error) {
			setError('search',{
				type: 'manual',
				message:'Pokémon not found, try another Id or Name'
			})
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
								, 10000)
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