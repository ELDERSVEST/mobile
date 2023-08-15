import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    checkMarkBox: {
        justifyContent: "center",
        alignItems: "center",
        width: 100,
        height: 100,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: 'rgba(35, 179, 113, 0.60)',
        marginTop: 60,
    },
    checkText: {
        marginTop: 30,
        marginBottom: 20,
        color: '#23B371',
        fontSize: 16,
        letterSpacing: 0.32,
        fontWeight: 600,
    }

})

export default styles