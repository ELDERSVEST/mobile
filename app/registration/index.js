import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { Button, Progress, ScreenHeaderButton } from "../../components";
import { icons, SIZES, } from "../../constants";
import CreatePassword from "../../components";

import globalStyles from "../../styles/globalStyles.style";

const RegistrationPage = () => {
    return (
        <CreatePassword />
    )
}

export default RegistrationPage