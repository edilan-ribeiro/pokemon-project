import { describe, expect } from "vitest"
import { numberFill } from "../../utils/numberFill"

describe('testing function to fill number space', () => {

    it('should fill the empty space of a string with zeroes acording to its lenght', () => {
       
        expect(numberFill(5, 3)).toEqual('005')
        expect(numberFill(7, 2)).toEqual('07')
        expect(numberFill(150, 3)).toEqual('150')
        expect(numberFill(25, 3)).toEqual('025')
        expect(numberFill(95, 3)).toEqual('095')
        expect(numberFill(1, 1)).toEqual('1')
        expect(numberFill(1000, 5)).toEqual('01000')

    })
})