import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
	return (
		<SafeAreaView>
			<Link href={"/login"}>Back to Login</Link>
		</SafeAreaView>
	);
}
