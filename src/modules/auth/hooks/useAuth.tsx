import { ApiClient } from "../../../shared/api";
import { useUserContext } from "../context/user";
import { ILogin, Register, IUser } from "../types";

export function useAuth() {
	const { token, setUser, setToken } = useUserContext();

	async function getUser() {
		if (!token) return;
		const result = await ApiClient.Get<IUser>({
			endpoint: "/users/me/",
			token: token,
		});
		if (result.status === "failure") {
            // if (result.code === 404) {
                
            // }
            return
        };
		setUser(result.data);
	}

	async function login(credentials: ILogin) {
		const result = await ApiClient.Post<string>({
			endpoint: "/users/login/",
			body: credentials,
		});
		if (result.status === "failure") return;
		setToken(result.data);
	}

	async function register(credentials: Register) {
		const result = await ApiClient.Post<string>({
			endpoint: "/users/register/",
			body: credentials,
		});
		if (result.status === "failure") return;
		setToken(result.data);
	}

	return {
		getUser,
		login,
		register,
	};
}

// KeyboardAwareScrollView
// app.json -> ("android": "softwareKeyboardLayoutMode": "pan")
// localhost -> 
// 192.168
// 192


// для реализации модалки - 
// вариант 1 - react-native-modal - модалка на экране
//  вариант 2 - через создание нового экрана(в _layout указать screenOptions presentation)