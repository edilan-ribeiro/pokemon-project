import { describe, expect } from "vitest"
import { getImageUrl } from "../../utils/pokeImageUrl"

describe('tests if the getImageUrl function is returning the correct url acording to its parameters', () => {

    it('should return a url that matches the ID of a given pokemon', () => {
        
        expect(getImageUrl(5)).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg')
        expect(getImageUrl(29)).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg')
        expect(getImageUrl(150)).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/150.svg')
        expect(getImageUrl(1013)).toEqual('https://archives.bulbagarden.net/media/upload/thumb/9/98/HOME1013.png/250px-HOME1013.png')
        expect(getImageUrl(700)).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/700.png')
        expect(getImageUrl(1000)).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1000.png')
        expect(getImageUrl(645)).toEqual('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/645.svg')
    })
})