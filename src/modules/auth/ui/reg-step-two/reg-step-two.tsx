import { View } from "react-native";
import { Input } from "../../../../shared/ui/input";
import { Controller, useForm } from "react-hook-form";
import { INamesur } from "../../types/namesur";
import { Button } from "../../../../shared/ui/button";
import { ImagePicker } from "../../../../shared/ui/imagepicker";
import { styles } from "./reg-step-two.style";

export function UserInfo(){
    const { handleSubmit, control } = useForm<INamesur>({
            defaultValues: { name: "", surname: "" },
        });
        function onSubmit(data: INamesur) {
            console.log(data);
        }
    return(
        <View style={styles.container}>
            <View style={styles.form}>
            <Controller
					control={control}
					name="name"
					rules={{
						required: {
							value: true,
							message: "Name is required"
						}
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Name"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								autoCorrect={false}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/>
                <Controller
					control={control}
					name="surname"
					rules={{
						required: {
							value: true,
							message: "Surname is required" //тут хз но дорустим
						}
					}}
					render={({ field, fieldState }) => {
						return (
							<Input
								placeholder="Surname"
								onChange={field.onChange}
								onChangeText={field.onChange}
								value={field.value}
								autoCorrect={false}
								errMsg={fieldState.error?.message}
							/>
						);
					}}
				/>
                </View>
                <View style={styles.imgpick}> <ImagePicker></ImagePicker> </View>
                <View  style={styles.buttonBlock}> <Button label="Register"></Button> </View>
        </View>
    )
}