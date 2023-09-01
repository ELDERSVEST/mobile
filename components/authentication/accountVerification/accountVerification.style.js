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
    dobContainer: {
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
    phoneContainer: {
        flex: 1,
        height: 40,
        // width: 170,
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: COLORS.grayText,
        backgroundColor: '#F1F1F1',
        paddingVertical: 0,
        paddingHorizontal: 10,
        margin: 0
    },
    phoneBox: {
        flex: 1,
        // width: 500,
        backgroundColor: 'red',
        margin: 0,
        padding: 0,
        height: 40,
        // alignItems: "center",
        // justifyContent: "center",
        
    },
    phoneTextContainer : {
        height: 50,
        alignItems: "flex-start",
        position: "absolute",
        top: -280,
        backgroundColor: '#F1F1F1',
        padding: 0,
        margin: 0,
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
        marginHorizontal: 5,
        
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