import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { DetailsPage } from "../pages/DetailsPage"

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" Component={HomePage} />
				<Route path="/:name" Component={DetailsPage} />
				<Route path="*" element={<h1>404 NOT FOUND</h1>} />
			</Routes>
		</BrowserRouter>
	)
}