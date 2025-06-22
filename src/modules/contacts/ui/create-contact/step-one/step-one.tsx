import { View, Text, Image } from "react-native";
import { useState, useEffect } from "react";
import { Input } from "../../../../../shared/ui/input/input";
import { useRouter } from "expo-router";
import { ApiClient } from "../../../../../shared/api";
import { IUser } from "../../../../auth/types";
import { Button } from "../../../../../shared/ui/button";
import { styles } from "./step-one.styles";
import { ICONS } from "../../../../../shared/ui/icons";
import { useUserContext } from "../../../../auth/context";
import { IMAGE_URL } from "../../../../../shared/constants";

export function StepOne() {
	const [isLoading, setIsLoading] = useState(false);
	const [username, setUsername] = useState("");
	const [error, setError] = useState<string | undefined>(undefined);
	const [foundUser, setFoundUser] = useState<null | IUser>(null);
	const router = useRouter();
	const { token } = useUserContext();

	useEffect(() => {
		async function getUser() {
            setFoundUser(null)
			if (!token) return;
			if (!username) return;
			setIsLoading(true);
			setError(undefined);
			const response = await ApiClient.Get<IUser>({
				endpoint: `/api/users/${username}`,
				token,
			});

			if (response.status == "failure") {
				switch (response.code) {
					case 404:
						setError("User not found");
						break
					default:
						setError("Network error");
						break
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
						source={{ uri: `${IMAGE_URL}/${foundUser.avatar}` }}
						style={styles.avatar}
					/>
					<Text style={styles.foundUserUsername}>
						{foundUser.username}
					</Text>
				</View>
			) : (
				<Text style={styles.error}>{error}</Text>
			)}
			<Button
				onPress={() =>
					router.push({
						pathname: "/modals/create-contact-step-two",
						params: {
							id: foundUser?.id,
							name: foundUser?.name,
							surname: foundUser?.surname,
							avatar: foundUser?.avatar,
						},
					})
				}
				label="Select"
				disabled={!foundUser}
			/>
		</View>
	);
}
