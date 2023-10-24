import "@testing-library/jest-dom"
import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import { describe, expect } from "vitest"
import "vitest-canvas-mock"
import { BrowserRouter } from "react-router-dom"
import { HomeCards } from "../components/HomeCards/HomeCards"
import { InitialPokemonList } from "../components/InitialPokemonList/InitialPokemonList"
import { server } from "../mocks/handlers"
import { LoadMoreButton } from "../components/InitialPokemonList/LoadMoreButton/LoadMoreButton"
import userEvent from "@testing-library/user-event"


describe("checks if the initial render cards are working correctly", () => {
	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

	it("should be able to fetch data from server, show the first three pokemons names on the screen and display a button", async () => {
		render(
			<BrowserRouter>
				<HomeCards>
					<InitialPokemonList />
				</HomeCards>
			</BrowserRouter>
		)

		const bulbasaurElement = await screen.findByText(/bulbasaur/i)		
		const ivysaurElement = await screen.findByText(/ivysaur/i)
		const venusaurElement = await screen.findByText(/venusaur/i)

		expect(bulbasaurElement).toBeInTheDocument()
		expect(ivysaurElement).toBeInTheDocument()
		expect(venusaurElement).toBeInTheDocument()

		expect(screen.getByText(/load more pokémons/i)).toBeInTheDocument()
		
	})
})