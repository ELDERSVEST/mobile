import { StyleSheet } from "react-native";
import { SIZES, COLORS } from "../../../constants";

const styles = StyleSheet.create({
    // REVEAL PHRASE BOX 
    revealPhraseBox: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        paddingHorizontal: 15,
        paddingVertical: 20,
        // marginVertical: 20,
        backgroundColor: '#F1f1F1',
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: COLORS.grayText
    },
    eyeIconCircle: {
        justifyContent: "center",
        alignItems: "center",
        padding: 7,
        height: 40,
        width: 40,
        borderRadius: '50%',
        backgroundColor: COLORS.grayText,
    },
    infoText: {
        marginVertical: 20,
    },
    boldText: {
        fontSize: 14,
        fontWeight: 600,
        letterSpacing: 0.28,
        color: COLORS.blackText,
        textAlign: "center",
        // marginVertical: 20,
        
    },
    button: {
        width: '100%'
        // marginVertical: 20,
    },


    // SEEDPHRASE BOX
    phraseContainer: {
        // position: "relative",
        flex: 1,
        flexDirection: "column",
        flexWrap: "wrap",
        // justifyContent: "space-between",
        alignItems: "center",
        height: 301,
        gap: 20,
        // columnGap: 50,
        paddingHorizontal: 35,
        paddingVertical: 20,
        // marginBottom: 40,
        backgroundColor: '#F1f1F1',
        borderRadius: 10,
        borderWidth: 0.2,
        borderColor: COLORS.grayText
    },
    phraseBox: {
        // flexBasis: '50%',
        width: '50%',
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    phraseNumber: {
        color: COLORS.grayText,
        fontSize: 14,
        width: 16,
    },
    phraseText: (dotted =  false) => ({
        width: 100,
        alignItems: "center",
        paddingVertical: 3,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: COLORS.primary,
        borderStyle: dotted ? "dashed" : "solid",
        fontSize: 12,
    }),
    confirmPhraseContainer: {
        // flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        alignItems: "center",
        height: 301,
        width: '100%',
        gap: 20,
        // columnGap: 50,
        // paddingHorizontal: 35,
        paddingVertical: 20,
        // marginBottom: 40,
        // backgroundColor: '#F1f1F1',
        // borderRadius: 10,
        // borderWidth: 0.2,
        // borderColor: COLORS.grayText
    },
    confirmPhraseBox: {
        // flexBasis: '50%',
        // width: '20%',
        // flexDirection: "row",
        alignItems: "center",
        // gap: 10,
    },
    confirmPhraseText: {
        width: 100,
        alignItems: "center",
        paddingVertical: 3,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: COLORS.deepSecondary,
        fontSize: 12,
    },
})

export default styles