import { View } from "react-native";
import { Button } from "../../../../shared/ui/button";
import { useForm, UseFormReturn } from "react-hook-form";
import { ISignUp } from "../../types";
import { styles } from "./signup-form.styles";
import { Link, Redirect } from "expo-router";

export function SignUpForm({ Step, isLastStep, isFirstStep, stepNum }: { Step: React.FC<UseFormReturn<ISignUp>>, isLastStep: boolean, isFirstStep: boolean, stepNum: number }) {
	// задаем стандартное значение так как по умолчанию стоят undefinedы а нам нужны пустые строки для корректной работы onChange и onChangeText
	const form = useForm<ISignUp>({
		defaultValues: { email: "", password: "" },
	});
	function onSubmit(data: ISignUp) {
		if (!isLastStep) return <Redirect href={`/signup/${stepNum + 1}`} />;
		console.log(data);
	}
	return (
		<View style={styles.container}>
			<View style={styles.form}>{<Step {...form} />}</View>
			<View style={styles.buttonBlock}>
				{!isFirstStep && <Link href={`/signup/${stepNum - 1}`}>Back</Link>}
				<Button
					label={isLastStep ? "Register" : "Continue..."}
					onPress={form.handleSubmit(onSubmit)}
				/>
			</View>
		</View>
	);
}
