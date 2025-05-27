import { View, Text, Alert, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { Input } from "../../../../../shared/ui/input/input";
import { Controller, useForm } from "react-hook-form";
import { ApiClient } from "../../../../../shared/api";
import { IUser } from "../../../../auth/types";
import { Button } from "../../../../../shared/ui/button";

type InputContact = {
	username: string;
};

export function StepOne() {
	const [isLoading, setIsLoading] = useState(false);
	const [username, setUsername] = useState("");
	const [error, setError] = useState<string | undefined>(undefined)
	const [foundUser, setFoundUser] = useState<null | IUser>(null)

	useEffect(()=>{
		async function getUser(){
			setIsLoading(true)
			setError(undefined)

			const response = await ApiClient.Get<IUser>({endpoint: `/users/${username}`})

			if (response.status == "failure"){
				switch(response.code){
					case 404:
						setError("User not found")
					default:
						setError("Network error")
				}
				return
			}
			setFoundUser(response.data)
		}
		getUser()
	}, [username])

	return (
		<View>
			<View>
				<Text>Username</Text>
				<View >
					<Input
						value={username}
						onChangeText={(text)=>{
							setUsername(text)
						}}
						placeholder="Enter username"
						errMsg={error}
						autoCapitalize="none"
						autoCorrect={false}
					/>
				</View>
			</View>
			<View>
                <Image/>
                <Text></Text> 
			</View>
            <Button label="Select"/>
		</View>
	);
}
