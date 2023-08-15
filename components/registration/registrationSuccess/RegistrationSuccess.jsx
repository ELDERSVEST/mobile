import { Stack } from "expo-router"
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native"
import Header from "../../common/headers/Header"
import { icons, COLORS } from "../../../constants"
import { Button, Progress } from "../../"

import styles from "./registrationSuccess.style"
import globalStyles from "../../../styles/globalStyles.style"

const RegistrationSuccess = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <Stack.Screen 
            options={{
                headerShown: false,

            }}
        />
        <View style={globalStyles.boxContainer}>
            <Header 
                logo={icons.secondaryLogo} 
                leftIcon={false}
            />
            <View style={globalStyles.contentBox}>
                <ScrollView
                    alwaysBounceVertical={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={ globalStyles.progressBox}>
                        <Progress progress={3}/>
                    </View>
                    <View style={styles.container}>
                    <View style={styles.checkMarkBox}>
                        <Image 
                            source={icons.check}
                        />
                    </View>
                    <Text style={styles.checkText}>Congratulations</Text>
                    <Text style={globalStyles.grayText()}>You’ve successfully registered and protected your wallet. Remember to keep your Seed Phrase safe.</Text>
                    </View>
                    </ScrollView>
                <View style={{marginVertical: 45, }}>
                    <Button title="Done" />
                </View>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default RegistrationSuccess