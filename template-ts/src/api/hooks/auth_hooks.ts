import { useNavigate } from "react-router-dom";
import { Login, Register } from "../endpoints";
import { useDispatch } from "react-redux";
import { clearGlobal, storeToken, storeUser } from "../../store/globalSlice";
import { AppDispatch } from "../../store/store";
import { LoginRoute, LandingRoute } from "../../utils/routes.ts";
// Api Hooks For Redirect and Other React Logic

export const useAuth = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	async function login(data: object) {
		try {
			const res = await Login.v1(data);
			console.log(res.data);
			dispatch(storeUser(res.data.user)); // Storing User in Redux-persist LocalStorage
			dispatch(storeToken(res.data.token));
			localStorage.setItem("token", res.data.token); // Storing Token Myself
			navigate(LandingRoute);
		} catch (error) {
			console.error("Login failed:", error);
		}
	}

	async function register(data: object) {
		try {
			const res = await Register.v1(data);
			console.log(res.data);
			// dispatch(storeUser(res.data.user)); // Storing User in Redux-persist LocalStorage
			// localStorage.setItem("token", res.data.token); // Storing Token Myself
		} catch (error) {
			console.error("Registration failed:", error);
		}
	}

	function logout() {
		dispatch(clearGlobal());
		localStorage.clear();
		navigate(LoginRoute);
		window.location.reload();
	}

	return { login, register, logout };
};
