import { Stack } from "expo-router"
import { View, Text, SafeAreaView } from "react-native"
import Header from "../../common/headers/Header"
import { icons } from "../../../constants"

import styles from "./secureWallet.style"
import Progress from "../../common/progress/Progress"
import { ScrollView } from "react-native-gesture-handler"

const SecureWallet = () => {
  return (
    <SafeAreaView>
        <Stack.Screen 
            options={{
                headerShown: false,

            }}
        />
        <Header logo={icons.secondaryLogo} />
        <View>
            <ScrollView>
                <Progress />
            </ScrollView>
            
            
        </View>
        
    </SafeAreaView>
  )
}

export default SecureWallet