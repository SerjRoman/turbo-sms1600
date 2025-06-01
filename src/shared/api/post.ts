import { API_URL } from "../constants";
import { Result } from "../types/api";

interface IPostRequest {
	endpoint: string;
	token?: string;
	body: any;
}

export async function Post<T>(options: IPostRequest): Promise<Result<T>> {
	const { endpoint, token, body } = options;
	const requestHeaders: HeadersInit = {
		"Content-Type": "application/json",
	};
	if (token) {
		requestHeaders["Authorization"] = `Bearer ${token}`;
	}
	try {
		const response = await fetch(`${API_URL}${endpoint}`, {
			method: "POST",
			headers: requestHeaders,
			body: JSON.stringify(body),
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
