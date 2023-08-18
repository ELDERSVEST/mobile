import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    dropdownContainer: {},
    dropdownItem: {},
    dropdownInput: {
        height: 40,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: COLORS.grayText,
        backgroundColor: '#F1F1F1',
        paddingVertical: 11,
        paddingHorizontal: 10,
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: COLORS.grayText,
        marginRight: 6,
    },
    placeholder: {
        flex:1,
        color: COLORS.grayText,
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: 0.2,
    },
    inputSelectText: {
        flex: 1,
        color: COLORS.blackText,
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.28,
    },
})

export default styles