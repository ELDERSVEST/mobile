import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../../constants";


const styles = StyleSheet.create({
    conatiner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 49,
        marginHorizontal: 40,
    },
    activeCircle: {
        height: 20,
        width: 20,
        backgroundColor: COLORS.primary,
        borderRadius: '50%',
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    normalCircle: {
        height: 20,
        width: 20,
        backgroundColor: COLORS.white,
        borderRadius: '50%',
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: COLORS.grayText,
        position: "relative",
    },
    line: {
        position: "absolute",
        top: '35%',
        left: '10%',
        height: 2,
        width: '80%',
        backgroundColor: COLORS.grayText,
        zIndex: -1,
    },
    activeCircleText: {
        fontSize: 12,
        fontWeight: 600,
        color: COLORS.deepSecondary,
    },
    CircleText: {
        fontSize: 12,
        fontWeight: 600,
        color: COLORS.grayText,
    },
    progressCircleContainer: {
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
    },
    progressText: {
        fontSize: 8,
        fontWeight: 400,
        color: '#05182A',
        marginTop: 6,
        maxWidth: 70,
        // alignItems: "center",
        // justifyContent: "center",
    }

})

export default styles