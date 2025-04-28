import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Linkbar, WelcomeBlock } from "../../modules/auth/ui";
import { RegisterForm } from "../../modules/auth/ui/register-form";
import {Text, View} from 'react-native'
import { COLORS } from "../../shared/constants";

export default function Register() {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <WelcomeBlock/>
            <RegisterForm />
            <View style={{alignItems: "center",justifyContent:"center", marginBottom: 10}}>
            <Text>Already have an account?<Link href={"/login"} style = {{color: COLORS.brownPrimaryLight , fontSize: 16}}>Login now</Link></Text>
            </View>
		</SafeAreaView>
	);
}