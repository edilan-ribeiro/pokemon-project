import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect } from "vitest"
import "vitest-canvas-mock"
import { BrowserRouter } from "react-router-dom"
import { server } from "../../mocks/handlers"
import { HomeCards } from "../../components/HomeCards/HomeCards"
import { InitialPokemonList } from "../../components/InitialPokemonList/InitialPokemonList"
import { LoadMoreButton } from "../../components/InitialPokemonList/LoadMoreButton/LoadMoreButton"

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
		
	}),

	it("should fetch the next batch of pokemon cards and show on the screen", async () =>{
		beforeAll(() => server.listen())
		afterEach(() => server.resetHandlers())
		afterAll(() => server.close())

		render(
			<BrowserRouter>
				<HomeCards>
					<InitialPokemonList>
						<LoadMoreButton/>
					</InitialPokemonList>			
				</HomeCards>
			</BrowserRouter>
		)

		const charizardElement = await screen.findByText(/charizard/i)	
		expect(charizardElement).toBeInTheDocument()
		
		const loadMoreButon = screen.getByText(/load more pokémons/i)
		await userEvent.click(loadMoreButon)
					
		const squirtleData = await screen.findByText('squirtle')
		expect(squirtleData).toBeInTheDocument()		
	})
})