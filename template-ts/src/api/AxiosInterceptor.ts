import React, { useEffect, useState, ReactNode } from "react";
import { AuthAxiosInstance } from "./axios";
import { useAuth } from "./hooks";
import { AxiosError, AxiosResponse } from "axios";

interface AxiosInterceptorProps {
	children: ReactNode;
}

const AxiosInterceptor: React.FC<AxiosInterceptorProps> = ({ children }) => {
	const [isSet, setIsSet] = useState(false);
	const { logout } = useAuth();
	useEffect(() => {
		const reqIntercepter = AuthAxiosInstance.interceptors.request.use(
			(config) => {
				// Get the token from cookies or localStorage
				// Add the token to the headers
				// Switch to Cookie httpOnly and Secure When possible
				config.headers.Authorization = `Bearer ${
					localStorage.getItem("token") || ""
				}`;
				return config;
			},
			(error) => {
				console.log(error);
				return Promise.reject(error);
			}
		);

		const resInterceptor = AuthAxiosInstance.interceptors.response.use(
			(response: AxiosResponse) => {
				return response;
			},
			async (error: AxiosError) => {
				// Incase 401 Unauthorized , move the user to login , clear Storage
				if (error?.response && error.response.status === 401) {
					setTimeout(() => {
						logout();
					}, 2000);
				}
				return Promise.reject(error);
			}
		);
		console.log("Axios Interceptor set");
		setIsSet(true);
		return () => {
			AuthAxiosInstance.interceptors.request.eject(reqIntercepter);
			AuthAxiosInstance.interceptors.response.eject(resInterceptor);
		};
	}, []);
	return isSet && children;
};

export default AxiosInterceptor;
