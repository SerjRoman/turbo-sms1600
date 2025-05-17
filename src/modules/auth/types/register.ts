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

export type Register = IRegisterStepOne & IRegisterStepTwo