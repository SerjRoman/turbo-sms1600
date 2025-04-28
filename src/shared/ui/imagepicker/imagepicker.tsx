import { Text, View, Image, TouchableOpacity } from 'react-native';
import {launchImageLibraryAsync, requestMediaLibraryPermissionsAsync } from 'expo-image-picker'
import { useState } from 'react';
import { styles } from './imagepicker.styles';
export function ImagePicker() {
  const [image, setImage] = useState<string>("")
  async function pickImage(){
    const result = await requestMediaLibraryPermissionsAsync()
    if (result.status === "granted"){
        const images = await launchImageLibraryAsync({
            mediaTypes: 'images',
            allowsEditing: false,
            allowsMultipleSelection: true,
            selectionLimit: 2,
            base64: true
    })
      if (images.assets){
        console.log(images.assets[0].uri)
        setImage(images.assets[0].uri)
        }
    }
  }
  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => {pickImage()}} style={styles.button}>
    <Text>Select Image</Text>
    </TouchableOpacity>
    <Image source={{uri: image}} width={350} height={250}/>
    </View>
  );
}

