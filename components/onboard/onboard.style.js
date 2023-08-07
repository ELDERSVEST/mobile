import { StyleSheet } from "react-native";
import { COLORS, SIZES, FONT } from '../../constants'


const styles = StyleSheet.create({
    imageContainer: {
        height: 434,
    },
    backgroundImage: {
        flex: 1,
    },
    welcomeHeader: {
        color: COLORS.secondary,
        fontSize: SIZES.large,
        fontWeight: 700,
        fontFamily: FONT.regular,
        marginBottom: 20,
        marginTop: 50,
    }, 
    grayText: {
        color: COLORS.grayText,
        fontFamily: FONT.regular,
        fontWeight: 400,
        fontSize: 12,
    },
    boldText: {
        color: COLORS.blackText,
        fontSize: 14,
        fontWeight: 600,
        fontFamily: FONT.regular,
        marginTop: 10,
    },
    tabDots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    activeTab: {
        width: 20,
        height: 10,
        borderRadius: 20,
        backgroundColor: COLORS.secondary,
        margin: 10
    },
    normalTab: {
        width: 10,
        height: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(248, 160, 27, 0.50)'
    },

    onboardingTextsBox: {
        flex: 1,
        padding: SIZES.large,
        paddingBottom: 45,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    privaryBox: {
        marginTop: 20,
    },
    privacyText: {
        fontSize:10, 
        fontWeight: 400
    }
    
});

export default styles