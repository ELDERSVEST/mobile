import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants";

const globalStyles = StyleSheet.create({
    headerText: {
        fontSize: SIZES.large,
        fontWeight: 600,
        color: COLORS.secondary,
    },
    grayText: (size = 12) => ({
        fontSize: size,
        fontWeight: 400,
        color: COLORS.grayText,
    }),
    boxContainer: {
        flex: 1,
        padding: SIZES.large,
    }
})

export default globalStyles