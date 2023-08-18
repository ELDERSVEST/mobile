import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 50,
    },
    inputBox: {
        marginTop: 10,
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.28,
        color: '#000',
        marginBottom: 10,
    },
    placeholder: {
        color: COLORS.grayText,
        fontSize: 10,
        fontWeight: 400,
        letterSpacing: 0.2,
    },
    inputSelectText: {
        color: COLORS.blackText,
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.28,
    },
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
    dropdownText: {
        flex: 1,
    },

})

export default styles