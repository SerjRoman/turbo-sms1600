export interface ISuccess<T> {
	status: "success";
	data: T;
}

export interface IFailure {
	status: "failure";
	message?: string;
	code: number
}

export type Result<S> = ISuccess<S> | IFailure;
