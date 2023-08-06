import { TouchableOpacity, Text, View } from "react-native"
import styles from "./button.style"

const Button = ({ title }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button