import { StyleSheet } from "react-native";
import { FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
    container: (text = true, title = true) => ({
        flexDirection: 'row',
        justifyContent: text || title ? 'space-between': 'flex-end',
        width: '100%',
        paddingHorizontal: SIZES.large,
        alignItems: "center"
    }),
    headerText: {
        fontFamily: FONT.regular,
        fontSize: 16,
        color: '#F1F1F1',
        fontWeight: 600,
    },
    headerTitle: {
        fontSize: 16,
        fontWeight: 600,
        letterSpacing: 0.32,
    },
    headerTitleBox: {
        flex: 1,
        alignItems: "center",
    }

})

export default styles