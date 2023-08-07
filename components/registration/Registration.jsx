import { View, Text, Switch } from "react-native"
import { SafeAreaView } from "react-native"
import {Progress, ScreenHeaderButton, Input, Button} from "../"
import { Stack } from "expo-router"
import { COLORS, icons, SIZES } from "../../constants"
// import ScreenHeaderButton from "../"

import globalStyles from "../../styles/globalStyles.style"
import styles from "./registration.styles"


const Registration = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <Stack.Screen 
            options={{
                headerShown: false,
                headerStyle: {
                },
                headerShadowVisible: false,
                // headerLeft: () => (
                //     <TouchableOpacity>
                //         <Text>Skip</Text>
                //     </TouchableOpacity>
                // ),
                headerRight: () => (
                    <ScreenHeaderButton iconURL={icons.logo} />
                ),
                headerTitle: ""
            }}
        />
        <View style={globalStyles.boxContainer}>
            <View style={{ flexDirection: "row", justifyContent: "flex-end", padding: SIZES.large,}}>
                <ScreenHeaderButton iconURL={icons.secondaryLogo} />
            </View>
            <View style={ styles.progressBox}>
                <Progress />
            </View>
            <View style={{flex: 1, flexDirection: "column", justifyContent: "space-between"}}>
                <View>
                    <View style={{ }}>
                        <Text style={globalStyles.headerText}>Create Password</Text>
                    </View>
                    <View style={{ marginTop: 30, marginBottom: 30}}>
                        <Text style={styles.lightText}>Start your journey by creating a password</Text>
                    </View>

                    <View>
                        <Text style={styles.inputLabel}>Password</Text>

                        <Input placeholder="Gtryh3421." />
                        <Text style={styles.inputInfo}>Password strength: <Text style={{color: '#1473DF'}}>Fair</Text></Text>
                    </View>
                    <View style={{marginTop: 30}}>
                        <Text style={styles.inputLabel}>Confirm password</Text>

                        <Input placeholder="**********" />
                    </View>

                    <View style={styles.biometricsContainer}>
                        <Text style={styles.biometricsText}>Unlock with Biometrics</Text>
                        <Switch style={{ transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }], marginTop: 30 }} />
                    </View>
                </View>
                <View style={{marginBottom: 45}}>
                    <Button title="Next" />
                </View>
                
            </View>
        </View>
        
    </SafeAreaView>
  )
}

export default Registration