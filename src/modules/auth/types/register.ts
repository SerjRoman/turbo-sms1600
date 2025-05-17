export interface IRegisterStepOne {
	email: string;
	username: string;
	password: string;
	confirmPassword: string;
}

export interface IRegisterStepTwo {
	name: string;
	surname: string;
	avatar: string;
}

export interface Register extends IRegisterStepTwo {
	email: string;
	username: string;
	password: string;
}
