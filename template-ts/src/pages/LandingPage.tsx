import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function LandingPage() {
	const { user } = useSelector((state: RootState) => state.global);
	useEffect(() => {
		console.log("Persisted User", user);
	}, []);
	return <div>Landing Page</div>;
}
