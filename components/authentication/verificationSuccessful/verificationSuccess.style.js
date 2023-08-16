import { StyleSheet } from "react-native";
// import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    checkMarkBox: {
        justifyContent: "center",
        alignItems: "center",
        width: 220,
        height: 220,
        borderRadius: 200,
        borderWidth: 4,
        borderColor: 'rgba(35, 179, 113, 0.60)',
        marginVertical: 40,
    },
    checkText: {
        marginTop: 50,

        color: '#23B371',
        fontSize: 16,
        letterSpacing: 0.32,
        fontWeight: 600,
    }

})

export default styles