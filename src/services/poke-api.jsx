export async function pokemonList() {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
    return await response.json()
}

export async function pokemonDetails() {
	const response = await fetch("https://pokeapi.co/api/v2/pokemon/1/")
	return await response.json()
}