export async function pokemonList(offset) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${offset}`)
	return await response.json()
}

export async function pokemonDetails(name) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
	return await response.json()
}