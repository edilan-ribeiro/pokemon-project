import "@testing-library/jest-dom"
import {  render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterAll, afterEach, beforeAll, describe, expect } from "vitest"
import "vitest-canvas-mock"
import { BrowserRouter } from "react-router-dom"
import { server } from "../mocks/handlers"
import { HomeCards } from "../components/HomeCards/HomeCards"
import { ThemeProvider } from "../contexts/ThemeContext"

describe("checks if the filter from the radio options is working", () => {
	beforeAll(() => server.listen())
	afterEach(() => server.resetHandlers())
	afterAll(() => server.close())

	it("should select the correct radio and recieve a pokemon list with pokemons with ghost type", async () => {
		render(
			<BrowserRouter>
				<ThemeProvider>
					<HomeCards />
				</ThemeProvider>
			</BrowserRouter>
		)        
        
		const ghostRadio = screen.getByRole('radio', {name: 'ghost'})        
        await userEvent.click(ghostRadio)
       		
        const resultGastly = await screen.findByText(/gastly/i, undefined, {timeout:2000})
		const resulthaunter = await screen.findByText(/haunter/i, undefined, {timeout:2000})
		const resultgengar = await screen.findByText(/gengar/i, undefined, {timeout:2000})

		expect(resultGastly).toBeInTheDocument()
		expect(resulthaunter).toBeInTheDocument()
		expect(resultgengar).toBeInTheDocument()
	}),

	it("should select the ice radio option and recieve a pokemon list with only pokemons with ice type", async () => {
		render(
			<BrowserRouter>
				<ThemeProvider>
					<HomeCards />
				</ThemeProvider>
			</BrowserRouter>
		)
        
		const iceRadio = screen.getByRole('radio', {name: 'ice'})        
        await userEvent.click(iceRadio)
       
        const resultArticuno = await screen.findByText(/articuno/i, undefined, {timeout:2000})
		const resultLapras = await screen.findByText(/lapras/i, undefined, {timeout:2000})

		expect(resultArticuno).toBeInTheDocument()
		expect(resultLapras).toBeInTheDocument()
	})
})
