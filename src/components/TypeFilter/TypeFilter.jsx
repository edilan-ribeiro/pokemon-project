import { useContext, useEffect } from "react"
import { allTypes } from "../TypesList/TypesList"
import { TypeFormWrapper, FilterList } from "./TypeFilter.Style.Jsx"
import { ThemeContext } from "../../contexts/ThemeContext"
import { useForm } from "react-hook-form"
import { pokemonTypes } from "../../services/poke-api"

export const TypeFilter = ( { setTypeFilter, searchData, setSearchData, setIsLoading } ) => {

    const { theme } = useContext(ThemeContext)

    const { register, watch } = useForm()
    
    const selectedType = watch('typeSelector')

    useEffect(() => {
        if (selectedType === null || selectedType === undefined) {
            return 
        } else if (selectedType === 'All types'){
            setTypeFilter([])
            setSearchData('')
        } else {
            if (searchData !== ''){
                setSearchData('')
            }
            const getFilteredPoke = async () => {
                setIsLoading(true)
                const filteredList = await pokemonTypes(selectedType)                
                const pokeWithType = filteredList.pokemon.map(poke => poke.pokemon)
                setTypeFilter(pokeWithType)      
                setIsLoading(false)      
            }
            getFilteredPoke()
        }
    }, [selectedType])
    
    return (
        <TypeFormWrapper>
        {allTypes.map((type, index) => (
            <FilterList key={index} $typecolor={type} theme={theme} htmlFor={type}>
                {type} <input value={type} type="radio" id={type} {...register('typeSelector')}/>
            </FilterList>
        ))}
        </TypeFormWrapper>
    )
}
