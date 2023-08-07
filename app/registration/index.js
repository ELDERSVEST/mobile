import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Button, Progress, ScreenHeaderButton } from "../../components";
import { icons, SIZES, } from "../../constants";
import Registration from "../../components";

import globalStyles from "../../styles/globalStyles.style";

const RegistrationPage = () => {
    return (
        <Registration />
    )
}

export default RegistrationPage