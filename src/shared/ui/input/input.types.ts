import { ReactNode } from "react";
import { Control, ControllerProps, FieldValues, UseControllerProps } from "react-hook-form";
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

type BaseProps = TextInputProps & UseControllerProps

export interface IInputProps extends BaseProps {
    iconLeft?: ReactNode,
    iconRight?: ReactNode,
    inputStyles?: TextStyle,
    containerStyles?: ViewStyle
    label?: string;
    control: Control<any>
}

