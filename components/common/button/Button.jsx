import { TouchableOpacity, Text, View } from "react-native"
import styles from "./button.style"

const Button = ({ title, active = true }) => {
    return (
        <TouchableOpacity style={styles.container(active)}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button