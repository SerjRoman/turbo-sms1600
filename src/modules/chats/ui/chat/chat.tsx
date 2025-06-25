import { useRouter } from "expo-router";
import { KeyboardAvoidingView, ScrollView, View } from "react-native";
import { HeaderBack } from "../../../../shared/ui/header";
import { ICONS } from "../../../../shared/ui/icons";
import { styles } from "./chat.styles";
import { Input } from "../../../../shared/ui/input";

export function Chat() {
	const router = useRouter();
	return (
		<View>
			
				<HeaderBack.Chat title="Name" />
				<ScrollView
					style={styles.main}
					automaticallyAdjustKeyboardInsets={true}
				></ScrollView>
                <KeyboardAvoidingView behavior="padding" >
				<View style={styles.bottom}>
					<ICONS.ClipIcon width={30} height={30} />

					<Input
						placeholder="Type in your message..."
						// inputStyles={styles.input}
						autoCorrect={false}
						autoCapitalize="none"
                        style={styles.input}
					/>

					<ICONS.SendIcon width={30} height={30} />
				</View>
			</KeyboardAvoidingView>
		</View>
	);
}
