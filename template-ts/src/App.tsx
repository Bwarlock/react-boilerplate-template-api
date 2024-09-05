import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingRoute, LoginRoute, RegisterRoute } from "./utils/routes";
import AxiosInterceptor from "./api/AxiosInterceptor";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
	return (
		<BrowserRouter>
			<AxiosInterceptor>
				<Routes>
					<Route path={LoginRoute} element={<LoginPage />}></Route>
					<Route path={RegisterRoute} element={<RegisterPage />}></Route>
					<Route path={LandingRoute} element={<LandingPage />}></Route>
				</Routes>
			</AxiosInterceptor>
		</BrowserRouter>
	);
}

export default App;
