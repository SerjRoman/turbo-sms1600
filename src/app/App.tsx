import { StatusBar } from "expo-status-bar";
import { Button } from "../shared/ui/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input } from "../shared/ui/input";
import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
	<Svg
		width={37}
		height={36}
		fill="none"
		{...props}
	>
		<Path
			fill="#000"
			d="M32.973 29.484c-2.142-3.6-5.442-6.18-9.294-7.404a9.926 9.926 0 0 0 4.214-4.783c.828-2 .957-4.209.37-6.287a9.837 9.837 0 0 0-3.626-5.218A10.315 10.315 0 0 0 18.5 3.777c-2.217 0-4.373.708-6.137 2.015a9.837 9.837 0 0 0-3.625 5.218 9.587 9.587 0 0 0 .37 6.287c.827 2 2.307 3.68 4.213 4.783-3.852 1.222-7.152 3.803-9.294 7.404a1.075 1.075 0 0 0-.132.841 1.116 1.116 0 0 0 .528.678 1.145 1.145 0 0 0 .868.106c.145-.04.28-.107.397-.198.117-.091.215-.205.286-.333 2.65-4.451 7.333-7.11 12.526-7.11s9.876 2.659 12.525 7.11a1.137 1.137 0 0 0 1.128.563 1.145 1.145 0 0 0 .758-.425 1.08 1.08 0 0 0 .215-.824 1.076 1.076 0 0 0-.153-.408Zm-22.348-15.86c0-1.513.462-2.994 1.327-4.253a7.832 7.832 0 0 1 3.534-2.82 8.084 8.084 0 0 1 4.55-.435 7.947 7.947 0 0 1 4.032 2.095 7.592 7.592 0 0 1 2.156 3.92 7.459 7.459 0 0 1-.448 4.424 7.707 7.707 0 0 1-2.9 3.436 8.036 8.036 0 0 1-4.376 1.29 7.999 7.999 0 0 1-5.566-2.245 7.558 7.558 0 0 1-2.309-5.411Z"
		/>
	</Svg>
)


export default function App() {
	return (
		<SafeAreaView>
			<StatusBar style="auto" />
			<Button label="Submit" disabled={true} />
			<Input iconLeft={<SvgComponent />} iconRight={<SvgComponent />} placeholder="hello world" label="email" errMsg="Invalid email" />
		</SafeAreaView>
	);
}
