import { View, Text, Alert, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { Input } from "../../../../../shared/ui/input/input";
import { Controller, useForm } from "react-hook-form";
import { ApiClient } from "../../../../../shared/api";
import { IUser } from "../../../../auth/types";
import { Button } from "../../../../../shared/ui/button";
import { styles } from "./step-one.styles";
import { ICONS } from "../../../../../shared/ui/icons";


export function StepOne() {
	const [isLoading, setIsLoading] = useState(false);
	const [username, setUsername] = useState("");
	const [error, setError] = useState<string | undefined>(undefined);
	const [foundUser, setFoundUser] = useState<null | IUser>(null);

	useEffect(() => {
		async function getUser() {
			setIsLoading(true);
			setError(undefined);

			const response = await ApiClient.Get<IUser>({
				endpoint: `/users/${username}`,
			});

			if (response.status == "failure") {
				switch (response.code) {
					case 404:
						setError("User not found");
					default:
						setError("Network error");
				}
				return;
			}
			setFoundUser(response.data);
		}
		getUser();
	}, [username]);

	return (
		<View style={styles.container}>
			<View style={styles.blockSearchUser}>
				<Input
					iconLeft={<ICONS.SearchIcon height={16} width={16} />}
					style={styles.inputSearch}
					label="Username"
					value={username}
					onChangeText={(text) => {
						setUsername(text);
					}}
					placeholder="Enter username"
					autoCapitalize="none"
					autoCorrect={false}
				/>
			</View>
			{foundUser ? (
				<View style={styles.blockFoundUser}>
					<Image
						source={{ uri: foundUser.avatar }}
						style={styles.avatar}
					/>
					<Text style={styles.foundUserUsername}>
						{foundUser.username}
					</Text>
				</View>
			) : (
				<Text style={styles.error}>{error}</Text>
			)}
			<Button label="Select" />
		</View>
	);
}
