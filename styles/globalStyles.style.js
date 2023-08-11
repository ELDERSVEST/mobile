import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const globalStyles = StyleSheet.create({
    headerText: {
        fontSize: SIZES.large,
        fontWeight: 600,
        color: COLORS.secondary,
        letterSpacing: 0.4,
    },
    grayText: (size = 12) => ({
        fontSize: size,
        fontWeight: 400,
        color: COLORS.grayText,
        letterSpacing: 0.24,
        lineHeight: 'normal',
    }),
    boxContainer: {
        flex: 1,
        padding: SIZES.large,
    },
    contentBox: {
        flex: 1, 
        flexDirection: "column", 
        justifyContent: "space-between"
    },
    progressBox: {
        marginTop: 20, 
        marginBottom: 30,
    },
})

export default globalStyles