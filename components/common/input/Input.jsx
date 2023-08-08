import { View, Text, TextInput, Image } from "react-native"
import { icons, COLORS } from "../../../constants"

import styles from "./input.styles"

const Input = ({ placeholder, iconURL}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
            style={styles.inputBox}
            placeholder={placeholder}
            placeholderTextColor={COLORS.blackText}
        />
        <Image 
            source={iconURL}
        />
    </View>
    
  )
}

export default Input
