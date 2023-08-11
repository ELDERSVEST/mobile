import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    eyeIconCircle: {
        height: 40,
        width: 40,
        backgroundColor: COLORS.grayText,
    },
    infoText: {
        marginVertical: 20,
    },
    boldText: {
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 0.28,
        color: COLORS.blackText,
        marginVertical: 20,
    },
    button: {
        marginVertical: 20,
    },
})

export default styles