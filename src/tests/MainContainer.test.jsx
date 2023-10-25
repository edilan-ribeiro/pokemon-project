import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { describe, expect } from "vitest"
import "vitest-canvas-mock"
import { MainContainer } from "../components/MainContainer/MainContainer"

describe("checks if the main container is displaying all components", () => {	

	it("should display header section, the theme toggler input and the footer section",  () => {
		render(
			<BrowserRouter>
				<MainContainer />
			</BrowserRouter>			
		)

		const headerText = screen.getByText(/Powered by PokeApi/i)
		expect(headerText).toBeInTheDocument()

		const themeToggler = screen.getByRole('checkbox')
		expect(themeToggler).toHaveAttribute('name', 'toggler')

		const footerText = screen.getByText(/Edilan Ribeiro/i)
		expect(footerText).toHaveAttribute('href', 'https://edilan-ribeiro.github.io/my-portfolio/')
	})
})