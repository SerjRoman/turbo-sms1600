import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./step-two-contacts.styles"
import { Input } from "../../../../../shared/ui/input/input"
import { SearchIcon } from "../../../../../shared/ui/icons/icons"
import { Controller, useForm } from "react-hook-form"
import { IContact, IUser } from "../../../../../modules/auth/types/index"
import { Button } from "../../../../../shared/ui/button/button"
import { useState } from "react"

export function StepTwocts(){
    const {control} = useForm<IContact>()
    const [isLoading, setIsLoading] = useState(false);
    // useLocalSearchParams
    // const [foundUser, setFoundUser] = useState<null | IUser>(null)


    return (
        <View style={styles.mainContainer}>
            <View style={styles.contactName}>
                <Controller
                control={control}
                name="username"
                rules={{
                        required: {
                            value: true,
                            message: "Username is required",
                        },
                    }}
                    render={({field, fieldState}) => {
                        return (
                            <Input 
                                label="Contact name"
                                placeholder="name"
                                onChange={field.onChange}
                                value={field.value}
                                errMsg={fieldState.error?.message}
                    />
                        )
                    }}

                >

                </Controller>
                
            </View>

            <View style={styles.contactSurname}>
                <Input label="Contact surname"
                
                />
            </View>

                
            <View style={styles.imageUserContainer}>
                <View style={styles.imageBlock}> <View style={styles.imageIcon}><SearchIcon/></View> </View>

                <Text style={styles.imageText}>Upload photo</Text>
            </View>

            <View>
                <Button label={"Add contact"}/>
            </View>
        </View>
    )
}