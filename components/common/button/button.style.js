import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.xsmall,
        paddingVertical: 13,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: COLORS.deepSecondary,
        fontSize: SIZES.large,
        fontWeight: 700,
        fontFamily: FONT.regular,
    }
})

export default styles
