export function getImageUrl(pokemonId) {
	let pokeImgUrl

	if (pokemonId < 648) {
		pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
	} else {
		pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
	}

	return pokeImgUrl
}
