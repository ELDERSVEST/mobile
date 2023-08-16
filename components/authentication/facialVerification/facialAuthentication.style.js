import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 50,
    },
    scanBox: {
        marginTop: 80,
    },
    scanCircle: {
        justifyContent: "center",
        alignItems: "center",
        width: 160,
        height: 160,
        borderRadius: 80,
        borderWidth: 5,
        borderColor: '#05182A',
        
    },
    scanLine: {
        width: '100%',
        height: 2,
        backgroundColor: '#05182A',
    },
    scanTopText: {
        paddingHorizontal: 15,
    },
    scanLowerText: {
        marginTop: 50,
        color: COLORS.blackText,
        fontSize: 14,
        letterSpacing: 0.28,
        fontWeight: 500,
    }

})

export default styles