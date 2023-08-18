import { Stack } from "expo-router"
import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground } from "react-native"
import Header from "../.."
import { icons, COLORS, images } from "../../../constants"
import { Button } from "../.."

import styles from "./facialAuthentication.style"
import globalStyles from "../../../styles/globalStyles.style"

const FacialAuthentication = () => {
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
                    <Text style={[globalStyles.grayText(14), styles.scanTopText]}>Hey, please hold on while your liveliness check completes, this only takes few seconds.</Text>
                    <View style={styles.scanBox}>
                        <ImageBackground
                            source={images.scan_bg}
                            style={{width: 160, height:160}}
                        >
                            <View style={styles.scanCircle}>
                                <View style={styles.scanLine} />
                            </View>
                        </ImageBackground>
                    </View>
                    
                    <Text style={styles.scanLowerText}>Place your face in the circle for easier detection</Text>
                    </View>
                    </ScrollView>
                <View style={{marginVertical: 45, }}>
                    <Button title="Detecting your Face" active={false} />
                </View>
            </View>

        </View>

    </SafeAreaView>
  )
}

export default FacialAuthentication