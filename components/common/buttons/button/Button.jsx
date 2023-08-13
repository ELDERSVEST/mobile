import { TouchableOpacity, Text, View } from "react-native"
import styles from "./button.style"

const doNothing = () => {}

const Button = ({ title, active = true, onPress = doNothing}) => {
    
    return (
        <TouchableOpacity 
            style={styles.container(active)}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button