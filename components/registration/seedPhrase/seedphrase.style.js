import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    revealPhraseBox: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
        // marginVertical: 20,
        backgroundColor: '#F1f1F1',
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: COLORS.grayText
    },
    eyeIconCircle: {
        justifyContent: "center",
        alignItems: "center",
        padding: 7,
        height: 40,
        width: 40,
        borderRadius: '50%',
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
        textAlign: "center",
        // marginVertical: 20,
        
    },
    button: {
        width: '100%'
        // marginVertical: 20,
    },
})

export default styles