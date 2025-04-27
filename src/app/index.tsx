import { Redirect } from "expo-router";

export default function Index() {
	return <Redirect href={"/login"}></Redirect>;
}

// /register/step-one
// /register/step-two
