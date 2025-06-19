import { ApiClient } from "../../../shared/api";
import { useUserContext } from "../context/user";
import { ILogin, Register, IUser } from "../types";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

export function useAuth() {
	const { user, token, setUser, setToken } = useUserContext();
	const [error, setError] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const router = useRouter();

	async function getUser() {
		if (!token) return;
		setIsLoading(true);
		const result = await ApiClient.Get<IUser>({
			endpoint: "/api/users/me/",
			token: token,
		});
		setIsLoading(false);
		if (result.status === "failure") {
			switch (result.code) {
				case 401:
					setError("You're not authenticated");
					break;
				case 404:
					setError("User not found");
					break;
				default:
					setError("Network error");
			}
			console.log(result);
			return;
		}
		setUser(result.data);
	}

	async function login(credentials: ILogin) {
		setIsLoading(true);
		const result = await ApiClient.Post<string>({
			endpoint: "/api/users/login/",
			body: credentials,
		});
		setIsLoading(false);
		if (result.status === "failure") {
			switch (result.code) {
				case 404:
					setError("User not found");
					break;
				case 422:
					setError("Invalid data");
					break;
				default:
					setError("Network error");
			}
			console.log(result);
			return;
		}
		setToken(result.data);
		await AsyncStorage.setItem("token", String(token));
	}

	async function register(credentials: Register) {
		setIsLoading(true);
		const result = await ApiClient.Post<string>({
			endpoint: "/api/users/register/",
			body: credentials,
		});
		setIsLoading(false);
		if (result.status === "failure") {
			switch (result.code) {
				case 409:
					setError("User already exists");
					break;
				case 422:
					setError("Invalid data");
					break;
				default:
					setError("Network error");
			}
			console.log(result);
			return;
		}
		setToken(result.data);
		await AsyncStorage.setItem("token", String(token));
	}

	useEffect(() => {
        // console.log(token)
		const fetchUser = async () => {
			const token = await AsyncStorage.getItem("token");
			if (token) {
				// setToken(token);
				await getUser();
			}
		};
		fetchUser();
	}, [token]);

	useEffect(() => {
		if (!user) return;
		router.replace("/chats");
	}, [user]);

	return {
		getUser,
		login,
		register,
		error,
		isLoading,
	};
}
