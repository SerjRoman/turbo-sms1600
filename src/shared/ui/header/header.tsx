import { View, Text } from "react-native";
import { IHeaderProps } from "./header.types";
import { styles } from "./header.styles";

export function Header(props: IHeaderProps) {
	const { headerBottom, headerLeft, headerRight, title } = props;
	return (
		<View style={styles.container}>
			<View style={styles.headerTop}>
				{headerLeft && (
					<View style={styles.headerLeft}>{headerLeft}</View>
				)}
				{title && <Text style={styles.title}>{title}</Text>}
				{headerRight && (
					<View style={styles.headerRight}>{headerRight}</View>
				)}
			</View>
			{headerBottom && (
				<View style={styles.headerBottom}>{headerBottom}</View>
			)}
		</View>
	);
}
