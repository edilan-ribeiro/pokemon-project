import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, expect } from "vitest"
import "vitest-canvas-mock"
import { server } from "../../mocks/handlers"
import App from "../../App"


describe("checks if the site is working correctly and if the user can do actions on both pages correctly", () => {
	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

	it("should be able to move from the home page to the details page using the card link, arrive at the details page, display abilities description and return to the home page", async () => {
		render(
			<App />
		)

		const bulbasaurElement = await screen.findByText(/bulbasaur/i)		
		const ivysaurElement = await screen.findByText(/ivysaur/i)
		const venusaurElement = await screen.findByText(/venusaur/i)
        const searchField = screen.getByRole('textbox', { placeholder: 'Type a pokémon Name or Number' })
        
		expect(bulbasaurElement).toBeInTheDocument()
		expect(ivysaurElement).toBeInTheDocument()
		expect(venusaurElement).toBeInTheDocument()
        expect(searchField).toBeInTheDocument()
		expect(screen.getByText(/load more pokémons/i)).toBeInTheDocument()

        const pageLink = screen.getByRole('link', {name: '#001 bulbasaur image bulbasaur grass poison' })

        await userEvent.click(pageLink)

		//checks abilities on details page
        expect(screen.getByText(/Abilities/i))        
		
		const openChlorophyll = screen.getByText('chlorophyll')
		const openOvergrow = screen.getByText('overgrow')

		await userEvent.click(openChlorophyll)
		await userEvent.click(openOvergrow)
		
		expect(screen.getByText(/its grass-type moves inflict 1.5× as much regular damage/i)).toBeInTheDocument()
		expect(screen.getByText(/This Pokémon's Speed is doubled during strong sunlight. This bonus does not count as a stat modifier./i)).toBeInTheDocument()

		//checks moves on details page
		expect(screen.getByText('Moves')).toBeInTheDocument()
		expect(screen.getByText(/poison-powder/i)).toBeInTheDocument()
		expect(screen.getByText(/solar-beam/i)).toBeInTheDocument()


		//uses the back button to return to the home page
		const backButton = screen.getByRole('button', {name: 'Return to the list'})
		await userEvent.click(backButton)

		//confirms if we are in the home page
		const charizardElement = await screen.findByText(/charizard/i)
		expect(charizardElement).toBeInTheDocument()
		expect(screen.getByText('Or search a specific Pokémon')).toBeInTheDocument()
	})
})