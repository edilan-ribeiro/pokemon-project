import "@testing-library/jest-dom"
import {  render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterAll, afterEach, beforeAll, describe, expect } from "vitest"
import "vitest-canvas-mock"
import { BrowserRouter } from "react-router-dom"
import { server } from "../../mocks/handlers"
import { HomeCards } from "../../components/HomeCards/HomeCards"
import { ThemeProvider } from "../../contexts/ThemeContext"

describe("checks if the search is working as a whole, will verify input, validation, submit and card display", () => {
	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

	it("should display an error message if tries to search with the field empty", async () => {
		render(
			<BrowserRouter>
				<HomeCards />
			</BrowserRouter>
		)        
        
        const searchButton = screen.getAllByRole('button')
        
        userEvent.click(searchButton[0])
       
        const messageItsEmpty = await screen.findByText(/The field is empty/i)	
		expect(messageItsEmpty).toBeInTheDocument()
	}),

    it("should display an error message if the user tries to search with the pokemon ID being 0", async () => {
		render(
			<BrowserRouter>
				<HomeCards />
			</BrowserRouter>
		)        
        
        const searchField = screen.getByRole('textbox', { placeholder: 'Type a pokémon Name or Number' })
        const searchButton = screen.getAllByRole('button')

        await userEvent.type(searchField, '0')
        userEvent.click(searchButton[0])
       
        const messageItsZero = await screen.findByText(/There is no pokemon with id 0/i)	
		expect(messageItsZero).toBeInTheDocument()
	}),

    it("should display an error if the user tries to search with a space in the search field", async () => {
		render(
			<BrowserRouter>
				<HomeCards />
			</BrowserRouter>
		)        
        
        const searchField = screen.getByRole('textbox', { placeholder: 'Type a pokémon Name or Number' })
        const searchButton = screen.getAllByRole('button')

        await userEvent.type(searchField, 'mr mime')
        userEvent.click(searchButton[0])
       
        const messageUsingSpace = await screen.findByText(/PokeApi doesn't allow spaces in name, try to use a hyphen instead!/i)	
		expect(messageUsingSpace).toBeInTheDocument()
	}),

    it("should display an error if the user tries to search with a number from 1018 and beyond", async () => {
		render(
			<BrowserRouter>
				<HomeCards />
			</BrowserRouter>
		)        
        
        const searchField = screen.getByRole('textbox', { placeholder: 'Type a pokémon Name or Number' })
        const searchButton = screen.getAllByRole('button')

        await userEvent.type(searchField, '5132')
        userEvent.click(searchButton[0])

        const messageTooHighNumber = await screen.findByText(/Must be a number between 1 and 1017/i)	
		expect(messageTooHighNumber).toBeInTheDocument()        
	}),

    it("should display an error if the user tries to search a invalid pokemon name", async () => {
		render(
			<BrowserRouter>
                <ThemeProvider>
					<HomeCards />
                </ThemeProvider>
			</BrowserRouter>
		)        
        
        const searchField = screen.getByRole('textbox', { placeholder: 'Type a pokémon Name or Number' })
        const searchButton = screen.getAllByRole('button')

        await userEvent.type(searchField, 'invalidPoke')
        userEvent.click(searchButton[0])
       
        const messageInvalidPokemon = await screen.findByText(/Pokémon not found or api failed, try another Id or Name./i)
		expect(messageInvalidPokemon).toBeInTheDocument()
	}),

    it("should display the pokemon that has been searched by the pokemon ID, use the button to return to pokemon list, and finally should display the pokemon that has been searched by the pokemon name instead", async () => {
		render(
			<BrowserRouter>
                <ThemeProvider>
					<HomeCards />
                </ThemeProvider>
			</BrowserRouter>
		)        
        
        const searchField = screen.getByRole('textbox', { placeholder: 'Type a pokémon Name or Number' })
        const searchButton = screen.getAllByRole('button')

        await userEvent.type(searchField, '7')
        userEvent.click(searchButton[0])
       
        const resultSquirtle = await screen.findByText(/squirtle/i, undefined, {timeout: 2000})
		expect(resultSquirtle).toBeInTheDocument()

        const returnToTheList = screen.getByText('Return to pokémon list')
        userEvent.click(returnToTheList)

        const hasReturnedToList = await screen.findByText(/bulbasaur/i, undefined, {timeout: 2000})
		expect(hasReturnedToList).toBeInTheDocument()

        await userEvent.type(searchField, '[Backspace]')
        await userEvent.type(searchField, 'butterfree')
        userEvent.click(searchButton[0])
       
        const resultButterfree = await screen.findByText(/butterfree/i, undefined, {timeout: 2000})
		expect(resultButterfree).toBeInTheDocument()
	})
})
