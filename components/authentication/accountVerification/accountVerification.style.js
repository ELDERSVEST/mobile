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
    phoneContainer: {
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
    phoneBox: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        
    },
    phoneLabel: {
        fontSize: 14,
        fontWeight: 500,
        letterSpacing: 0.28,
        color: COLORS.blackText,
        marginBottom: 10,
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: COLORS.grayText,
        marginRight: 6,
    },
    countryCode: {
        marginLeft: 10,
        marginRight: 5,
    },
    datePicker: {
        flex: 1,
    },

})

export default styles