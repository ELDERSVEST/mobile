import { StyleSheet } from "react-native";
import { FONT, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: SIZES.large,
        alignItems: "center"
    },
    headerText: {
        fontFamily: FONT.regular,
        fontSize: 16,
        color: '#F1F1F1',
        fontWeight: 600,
    }

})

export default styles