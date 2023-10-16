export function getImageUrl(pokemonId) {
	let pokeImgUrl

	if (pokemonId < 648) {
		pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`
	} else if (pokemonId === 1013) {
		pokeImgUrl = `https://archives.bulbagarden.net/media/upload/thumb/9/98/HOME1013.png/250px-HOME1013.png`
	} else {
		pokeImgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`
	}

	return pokeImgUrl
}
