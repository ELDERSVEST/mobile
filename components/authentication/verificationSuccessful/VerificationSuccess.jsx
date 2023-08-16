import { Stack } from "expo-router"
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native"
import Header from "../../common/headers/Header"
import { icons, COLORS } from "../../../constants"
import { Button } from "../../"

import styles from "./verificationSuccess.style"
import globalStyles from "../../../styles/globalStyles.style"

const VerificationSuccess = () => {
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
                leftIcon={true}
                rightIcon={false}
                title="Facial Authentication"
            />
            <View style={globalStyles.contentBox}>
                <ScrollView
                    alwaysBounceVertical={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.container}>
                    <Text style={styles.checkText}>Verification Successful</Text>
                    <View style={styles.checkMarkBox}>
                        <Image 
                            source={icons.check}
                        />
                    </View>
                    
                    <Text style={globalStyles.grayText()}>Congratulations, your details has been saved.</Text>
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

export default VerificationSuccess