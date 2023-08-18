import { View, Text, TextInput, Image } from "react-native"
import { icons, COLORS } from "../../../constants"

import styles from "./input.styles"

const Input = ({ value, placeholder, iconURL, placeholderStyle}) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
          value={value}
          style={ value === '' ? styles.inputBox : [styles.inputBox, placeholderStyle]}
          placeholder={placeholder}
          placeholderTextColor={placeholderStyle.color}
          
        />
        <Image 
            source={iconURL}
        />
    </View>
    
  )
}

export default Input
