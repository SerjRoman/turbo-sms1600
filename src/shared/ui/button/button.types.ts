import { TouchableOpacityProps } from "react-native";
// ключевое слово extends позволяет расширить возможности интерфейса
//(добавть какие-то существующие пропсы от другого интерфейса) за счет другого интерфейса - наследование в интерфейсах
export interface IButtonProps extends TouchableOpacityProps {
	label: string;
	disabled?: boolean;
}
