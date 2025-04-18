import { TextInput, View, Text } from 'react-native';
import { IInputProps } from './input.types';
import { styles } from '../input/input.styles';

export function Input(props: IInputProps) {
    const { placeholder, iconLeft, iconRight, inputStyles, label, ...inputProps } = props;
    
    return(
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.inputView}>
                {iconLeft && <View style={styles.iconLeft}>{iconLeft}</View>}
                <TextInput style={inputStyles} {...inputProps}></TextInput>
                {iconRight && <View style={styles.iconRight}>{iconRight}</View>}
            </View>
        </View>
    )
}
