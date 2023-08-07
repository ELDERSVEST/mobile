import { StyleSheet } from "react-native";
import globalStyles from "../../styles/globalStyles.style";
import { COLORS, SIZES } from "../../constants";


const styles = StyleSheet.create({
    progressBox: {
        // flex: 1, 
        marginTop: 20, 
        marginBottom: 30,
    },
    lightText: {
        ...globalStyles.grayText(14),
        letterSpacing: 0.28,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.28,
        color: COLORS.blackText,
        marginBottom: 10,
    },
    inputInfo: {
        marginTop: 5,
        letterSpacing: 0.2,
        fontWeight: 400,
        fontSize: 10,
        color: COLORS.grayText,
    },
    biometricsContainer: {
        
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        
    },
    biometricsText: {
        marginTop: 30,
        fontSize: 12,
        fontWeight: 600,
        color: COLORS.blackText,
    },
    // switchButton: {
    //     height: 16,
    //     width: 28,
    // }
})

export default styles