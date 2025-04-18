import { ReactNode } from "react";
import { TextInputProps, TextStyle } from "react-native";

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
    placeholder: string,
    iconLeft?:ReactNode ,
    iconRight?: ReactNode,
    label?: string,
    inputStyles: TextStyle,
    textStyles: TextStyle
}
    