import { FormEvent, useEffect, useRef, useState } from "react";
import { useAuth } from "../api/hooks";

export default function Login() {
	const [values, setValues] = useState({
		email: "",
		password: "",
		domainName: "",
	});
	const { login } = useAuth();
	const emailField = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		if (emailField?.current) {
			emailField?.current?.focus();
		}
	}, []);

	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
		login(values);
	};

	return (
		<form
			style={{
				backgroundColor: "#ffffff",
				padding: "2rem",
				borderRadius: "8px",
				boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
				width: "100%",
				maxWidth: "400px",
				display: "flex",
				flexDirection: "column",
			}}
			action="#"
			onSubmit={handleLogin}>
			<h2
				style={{
					fontSize: "1.5rem",
					margin: 0,
					marginBottom: "1.5rem",
					textAlign: "center",
				}}>
				Login
			</h2>
			<label
				style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "#333" }}>
				Email :
			</label>

			<input
				type="text"
				name="email"
				style={{
					// width: "100%",
					padding: "0.75rem",
					marginBottom: "1rem",
					border: "1px solid #ccc",
					borderRadius: "4px",
					fontSize: "1rem",
				}}
				ref={emailField}
				onChange={(e) => {
					setValues((val) => {
						return { ...val, email: e.target.value };
					});
				}}
			/>
			<br />
			<label
				style={{ marginBottom: "0.5rem", fontSize: "1rem", color: "#333" }}>
				Password :
			</label>
			<input
				type="password"
				name="password"
				style={{
					// width: "100%",
					padding: "0.75rem",
					marginBottom: "1rem",
					border: "1px solid #ccc",
					borderRadius: "4px",
					fontSize: "1rem",
				}}
				onChange={(e) => {
					setValues((val) => {
						return { ...val, password: e.target.value };
					});
				}}
			/>
			<br />
			<input
				type="submit"
				value="submit"
				name="submit"
				style={{
					backgroundColor: "#007bff",
					color: "white",
					border: "none",
					borderRadius: "4px",
					padding: "0.75rem",
					fontSize: "1rem",
					cursor: "pointer",
					transition: "background-color 0.3s ease",
				}}
				onMouseEnter={(e: React.MouseEvent<HTMLInputElement>) => {
					e.currentTarget.style.backgroundColor = "#0056b3";
				}}
				onMouseLeave={(e: React.MouseEvent<HTMLInputElement>) => {
					e.currentTarget.style.backgroundColor = "#007bff";
				}}
			/>
		</form>
	);
}
