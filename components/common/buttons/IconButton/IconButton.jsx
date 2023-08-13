import { TouchableOpacity, Text, View, Image } from "react-native"
import styles from "./iconButton.style"

const IconButton = ({ title, icon = false, buttonStyles }) => {
    return (
        <TouchableOpacity style={styles.container(buttonStyles)}>
            { icon && <Image 
                source={icon}
                style={styles.icon}
            /> }
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

export default IconButton