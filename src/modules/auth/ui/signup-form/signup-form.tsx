import { View } from "react-native";
import { Button } from "../../../../shared/ui/button";
import { useForm } from "react-hook-form";
import { ISignUp } from "../../types";
import { styles } from "./signup-form.styles";
import { useMultistepForm } from "../../../../shared/ui/hooks";
import { BaseInfoForm } from "./steps/baseInfo";
import { PersonalInfoForm } from "./steps/personalInfo";

export function SignUpForm() {
	// задаем стандартное значение так как по умолчанию стоят undefinedы а нам нужны пустые строки для корректной работы onChange и onChangeText
	const { handleSubmit, control, getValues } = useForm<ISignUp>({
		defaultValues: { email: "", password: "" },
	});
	const { step, isLastStep, isFirstStep, next, back } = useMultistepForm([
		<BaseInfoForm control={control} getValues={getValues} />,
		<PersonalInfoForm control={control} />,
	]);
	function onSubmit(data: ISignUp) {
		if (!isLastStep) return next();
		console.log(data);
	}
	return (
		<View style={styles.container}>
			<View style={styles.form}>{step}</View>
			<View style={styles.buttonBlock}>
				{!isFirstStep && <Button label="Back" onPress={back} />}
				<Button
					label={isLastStep ? "Register" : "Continue..."}
					onPress={handleSubmit(onSubmit)}
				/>
			</View>
		</View>
	);
}
