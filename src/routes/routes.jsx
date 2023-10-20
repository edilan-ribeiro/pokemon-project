import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { DetailsPage } from "../pages/DetailsPage"
import { Error404 } from "../pages/Error404"

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route exact path="/" Component={HomePage} />
				<Route path="/:name" Component={DetailsPage} />
				<Route path="*" Component={Error404} />
			</Routes>
		</BrowserRouter>
	)
}