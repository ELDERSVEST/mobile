import { StyleSheet} from "react-native";
import { COLORS } from "../../../constants";


const styles = StyleSheet.create({
    conatiner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 2,
        borderColor: COLORS.grayText,
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
        marginTop: -49,
        justifyContent: 'center', 
        alignItems: 'center',
        zIndex: 100,
        position: "relative",
    },
    progressTextBox: {
        justifyContent: 'center', 
        alignItems: 'center', 
        width: 70, 
        position: 'absolute', 
        top: 20 
    },
    progressText: (mT=true) =>({
        flex: 1,
        fontSize: 8,
        fontWeight: 400,
        color: '#05182A',
        marginTop: mT == true ? 6 : 0,
        whiteSpace: 'nowrap',
        // position: "absolute",
        // top: '100%',
    })

})

export default styles