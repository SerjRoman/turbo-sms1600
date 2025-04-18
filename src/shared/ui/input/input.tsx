import React from "react";
import { TextInput, View } from "react-native";
import { IInputProps } from "./input.types";
import { styles } from "./input.styles";


export function Input(props: IInputProps) {
    const { placeholder, value, onChangeText, inputStyles, containerStyle, ...restProps } = props
  
    return (
      <View style={[styles.container, containerStyle]} {...restProps}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, inputStyles]}
        />
      </View>
    )
  }