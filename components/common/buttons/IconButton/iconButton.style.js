import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from "../../../../constants";

const styles = StyleSheet.create({
    container: (buttonStyles) => ({
        flexDirection: 'row',
        gap: 5,
        width: buttonStyles.width,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.xsmall,
        paddingVertical: 5,
        // paddingHorizontal: 22,
        justifyContent: "center",
        alignItems: "center",
    }),
    buttonText: {
        color: COLORS.deepSecondary,
        fontSize: SIZES.large,
        fontWeight: 500,
        fontFamily: FONT.regular,
        letterSpacing: 0.24,
        fontSize: 12,
    },
    icon: (buttonStyles) => ( {
        width: buttonStyles.iconSize,
        height: buttonStyles.iconSize,
    })
})

export default styles
