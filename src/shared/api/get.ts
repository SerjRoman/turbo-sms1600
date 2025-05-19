import { API_URL } from "../constants";
import { Result } from "../types/api";

interface IGetRequest {
	endpoint: string;
	token?: string;
}
export async function Get<T>(options: IGetRequest): Promise<Result<T>> {
	const { endpoint, token } = options;
	const requestHeaders: HeadersInit = {
		"Content-Type": "application/json",
	};
	if (token) {
		requestHeaders["Authorization"] = `Bearer ${token}`;
	}
	try {
		const response = await fetch(`${API_URL}${endpoint}`, {
			headers: requestHeaders,
            
		});
		const result = await response.json();
		const resultWithCode: Result<T> = {
			...result,
			code: response.status,
		};
		return resultWithCode;
	} catch (error) {
		console.error(error);
		return { status: "failure", message: "You are tea pot", code: 418 };
	}
}