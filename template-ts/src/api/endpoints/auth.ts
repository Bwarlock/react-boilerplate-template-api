import { Api_Interface } from "../../interfaces/api_interaces";
import { LoginAxiosInstance } from "../axios";

// Api Endpoints

export function Login(data: object) {
	return (Login as unknown as Api_Interface).v1(data);
}

Login.v1 = function v1(data: object) {
	return LoginAxiosInstance({
		method: "post",
		url: "/auth/login",
		data: data,
	});
};

export function Register(data: object) {
	return (Register as unknown as Api_Interface).v1(data);
}

Register.v1 = function v1(data: object) {
	return LoginAxiosInstance({
		method: "post",
		url: "/auth/register",
		data: data,
	});
};
