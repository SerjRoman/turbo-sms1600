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
        // наче можна було б юзнути switch case, але я нічо з ним не придумала
        // винести теж можна було б, але хз чо не зробила
		if (result.status === "failure") {
			if (result.code === 404) {
				throw new Error(result.message);
			} else if (result.code === 409) {
                throw new Error(result.message);
			} else if (result.code === 401) {
                throw new Error(result.message);
			} else if (result.code === 422) {
                throw new Error(result.message);
			} else if (result.code === 500) {
                throw new Error(result.message);
			}
			return
		}
        
		setUser(result.data);
	}

	async function login(credentials: ILogin) {
		const result = await ApiClient.Post<string>({
			endpoint: "/users/login/",
			body: credentials,
		});
		if (result.status === "failure") {
			if (result.code === 404) {
				throw new Error(result.message);
			} else if (result.code === 409) {
                throw new Error(result.message);
			} else if (result.code === 401) {
                throw new Error(result.message);
			} else if (result.code === 422) {
                throw new Error(result.message);
			} else if (result.code === 500) {
                throw new Error(result.message);
			}
			return
		}
		setToken(result.data);
	}

	async function register(credentials: Register) {
		const result = await ApiClient.Post<string>({
			endpoint: "/users/register/",
			body: credentials,
		});
		if (result.status === "failure") {
			if (result.code === 404) {
				throw new Error(result.message);
			} else if (result.code === 409) {
                throw new Error(result.message);
			} else if (result.code === 401) {
                throw new Error(result.message);
			} else if (result.code === 422) {
                throw new Error(result.message);
			} else if (result.code === 500) {
                throw new Error(result.message);
			}
			return
		}
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
