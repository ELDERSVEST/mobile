import { View, Text, TextInput, Image } from "react-native"
import { icons, COLORS } from "../../../constants"

import styles from "./input.styles"

const Input = ({ value, label, placeholder, iconURL,}) => {
  return (
    <>
    <Text style={styles.inputLabel}>{label}</Text>

    <View style={styles.inputContainer}>
        <TextInput 
          value={value}
          style={styles.inputBox}
          placeholder={placeholder}
          
        />
        <Image 
            source={iconURL}
        />
    </View>
    </>
  )
}

export default Input
