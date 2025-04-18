import { ReactNode } from "react";
import { TextInputProps, TextStyle, ViewStyle } from "react-native";

{/* <Input 
    placeholder,
    iconLeft, 
    iconRight, 
    textStyles, 
    inputStyles, 
    (наследуем от TextInputProps)></Input> */}

// Иметь возможность контролировать input(onChange, value, onChangeText)
// Может быть иконка слева
// Стили текста могут менятся
// должен быть placeholder
// Разные стили могут быть
// может быть иконка справа

// container

export interface IInputProps extends TextInputProps{
    placeholder: string
    value: string
    onChangeText: (text: string) => void
    iconLeft?:ReactNode 
    iconRight?: ReactNode
    inputStyles: TextStyle
    containerStyle: ViewStyle
}
    