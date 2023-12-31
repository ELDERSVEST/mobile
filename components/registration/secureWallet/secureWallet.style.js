import { StyleSheet } from "react-native";
import { COLORS } from "../../../constants";


const styles = StyleSheet.create({
    infoBox: {
        borderWidth: 0.2,
        borderColor: COLORS.grayText,
        backgroundColor: '#F1F1F1',
        borderRadius: 10,
        marginVertical: 30,
        padding: 15,
    },
    heading: {
        color: COLORS.blackText,
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 0.28,
    },
    infoText: {
        marginTop: 10,
        marginBottom: 20,
    },
    bulletBox: {
        flexDirection: "row",
        paddingRight: 30,
        // padding: 0,
        // margin: 0,
    },
    bullet:{
        color: COLORS.grayText,
        marginHorizontal: 10,
        fontSize: 12,
    }, 
    bulletText: {
        // marginTop: 5,
        color: COLORS.grayText,
    },

})

export default styles