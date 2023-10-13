import { GlobalStyle } from "./styles/GlobalStyle"
import { AppRoutes } from "./routes/routes"
import { ThemeContext, ThemeProvider} from "./contexts/ThemeContext"
import { useContext } from "react";


function App() {

	const { theme } = useContext(ThemeContext);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<AppRoutes />
		</ThemeProvider>
	)
}

export default App
