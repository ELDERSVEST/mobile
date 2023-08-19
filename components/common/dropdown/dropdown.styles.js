import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    dropdownContainer: {
        backgroundColor: COLORS.primary,
        borderRadius: 6,
        color: '#F1F1F1',
        // fontSize: 12,
        width: '90%',
    },
    inputLabel: {
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.28,
        color: '#000',
        marginBottom: 10,
    },
    dropdownHeader: {
        flexDirection: "row",
        alignItems: "center",
        color: 'green',
        paddingHorizontal: 10,
        paddingVertical: 11,
        borderBottomWidth: 1,
        borderColor: '#fff',
    },
    dropdownHeaderText: {
        color: '#F1F1F1',
        fontSize: 10,
        marginHorizontal: 6,
        fontWeight: 500,
        letterSpacing: 0.2,
    },
    dropdownItemText: (active = false) => ({
        color: active ? COLORS.deepSecondary : '#F1F1F1',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 0.24,
        paddingVertical: 10,
        
    }),
    dropdownItem: (isLast) => ({
        borderBottomWidth: isLast ? 0 : 1,
        borderColor: "#fff"
    }),
    dropdownBody: {
        paddingHorizontal: 30,
        paddingBottom: 10,
    },
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