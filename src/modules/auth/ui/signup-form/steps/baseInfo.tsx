import { View } from "react-native";
import { Input } from "../../../../../shared/ui/input";
import { ICONS } from "../../../../../shared/ui/icons";
import { Control, UseFormGetValues } from "react-hook-form";
import { ISignUp } from "../../../types";

export function BaseInfoForm({
	control,
	getValues,
}: {
	control: Control<ISignUp>;
	getValues: UseFormGetValues<ISignUp>;
}) {
	return (
		<View style={{ gap: 30 }}>
			<Input
				name="email"
				rules={{
					required: {
						value: true,
						message: "Email is required",
					},
				}}
				control={control}
				placeholder="SuperCoolEmail@gmail.com"
				iconLeft={<ICONS.UserIcon width={30} height={30} />}
				label="Email"
				autoCorrect={false}
			/>
			<Input
				name="username"
				rules={{
					required: {
						value: true,
						message: "Username is required",
					},
				}}
				control={control}
				placeholder="SuperCoolUsername"
				iconLeft={<ICONS.UserIcon width={30} height={30} />}
				label="Username"
				autoCorrect={false}
			/>
			<Input.Password
				control={control}
				name="password"
				rules={{
					required: {
						value: true,
						message: "Password is required",
					},
				}}
				placeholder="Password"
				label="Password"
				autoCorrect={false}
			/>
			<Input.Password
				control={control}
				name="password2"
				rules={{
					required: {
						value: true,
						message: "Password is required",
					},
					validate: (value: string) => {
						const { password } = getValues();
						return value === password || "Passwords does not match";
					},
				}}
				placeholder="Password"
				label="Re-type password"
				autoCorrect={false}
			/>
		</View>
	);
}
