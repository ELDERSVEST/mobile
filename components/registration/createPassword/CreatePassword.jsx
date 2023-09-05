import { useState } from "react"
import { View, Text, Switch, ScrollView } from "react-native"
import { SafeAreaView } from "react-native"
import {Progress, ScreenHeaderButton, Input, Button} from "../.."
import { Stack } from "expo-router"
import { COLORS, icons, SIZES } from "../../../constants"
// import ScreenHeaderButton from "../"

import globalStyles from "../../../styles/globalStyles.style"
import styles from "./createPassword.styles"




const CreatePassword = () => {
    const [isSwitchEnabled, setIsSwitchEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchEnabled(previousState => !previousState);
  };
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
            
            
                <View style={globalStyles.contentBox}>
                    <ScrollView
                        style={{flex: 1}}
                        showsVerticalScrollIndicator={false}
                        alwaysBounceVertical={false}
                    >
                        <View style={ globalStyles.progressBox}>
                            <Progress />
                        </View>
                    <View>
                        
                        <Text style={globalStyles.headerText}>Create Password</Text>
                        
                        <View style={{ marginTop: 30, marginBottom: 30}}>
                            <Text style={styles.lightText}>Start your journey by creating a password</Text>
                        </View>

                        <View>

                            <Input label="Password" placeholder="Gtryh3421." iconURL={icons.eye} />
                            <Text style={styles.inputInfo}>Password strength: <Text style={{color: '#1473DF'}}>Fair</Text></Text>
                        </View>
                        <View style={{marginTop: 30}}>
                            

                            <Input label="Confirm password" placeholder="**********" iconURL={icons.eyeOff} />
                        </View>

                        <View style={styles.biometricsContainer}>
                            <Text style={styles.biometricsText}>Unlock with Biometrics</Text>
                            <Switch 
                                trackColor = {{ false: '#767676', true: COLORS.primary }}
                                thumbColor={isSwitchEnabled ? COLORS.deepSecondary : "#fff"}
                                ios_backgroundColor="#767676"
                                style={{ 
                                    transform: [{ scaleX: 0.7 }, { scaleY: 0.8 }], 
                                    
                                }} 
                                onValueChange={toggleSwitch}
                                value={isSwitchEnabled}   
                                
                                />
                        </View>
                    </View>
                    </ScrollView>
                    <View style={{marginVertical: 45, }}>
                        <Button title="Next" />
                    </View>
                    
                </View>
            
        </View>
        
        
    </SafeAreaView>
  )
}

export default CreatePassword