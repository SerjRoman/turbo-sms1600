import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginForm, WelcomeBlock } from "../../modules/auth/ui";
import {Text, View} from 'react-native'
import { Link } from "expo-router";
import { COLORS } from "../../shared/constants";

export default function Login() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
			<StatusBar style="auto" />
			<WelcomeBlock />
			<LoginForm />
            <View style={{alignItems: "center",justifyContent:"center", marginBottom: 10}}>
			<Text>Don’t have an account? <Link href={'/register'} style = {{color: COLORS.brownPrimaryLight , fontSize: 16}}>Register now</Link></Text>
            </View>
        </SafeAreaView>
	);
}