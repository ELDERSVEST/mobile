import { StyleSheet } from "react-native";

import { COLORS, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    inputContainer: {
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
    inputBox: {
        flex: 1,
        // alignItems: "center",
        // justifyContent: "center",
        
    }
})

export default styles