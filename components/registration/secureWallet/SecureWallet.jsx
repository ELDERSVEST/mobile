import { Stack } from "expo-router"
import { View, Text, SafeAreaView } from "react-native"
import Header from "../../common/headers/Header"
import { icons, COLORS } from "../../../constants"

import styles from "./secureWallet.style"
import globalStyles from "../../../styles/globalStyles.style"

import { Button, Progress } from "../../" 
import { ScrollView } from "react-native"

const SecureWallet = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <Stack.Screen 
            options={{
                headerShown: false,

            }}
        />
        <View style={globalStyles.boxContainer}>
            <Header logo={icons.secondaryLogo} />
            <View style={globalStyles.contentBox}>
                <ScrollView
                    alwaysBounceVertical={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={ globalStyles.progressBox}>
                        <Progress progress={2}/>
                    </View>
                    <View>
                        
                        <Text style={globalStyles.headerText}>Secure your wallet</Text>

                        <View style={styles.infoBox}>
                            <Text style={styles.heading}>Manual</Text>
                            <Text style={[globalStyles.grayText(), styles.infoText]}>Please read this manual carefully to protect your digital assets effectively.</Text>

                            <Text style={styles.heading}>What is a Seed Phrase?</Text>
                            <Text style={[globalStyles.grayText(), styles.infoText]}>Your seed phrase is a crucial component in accessing and recovering your cryptocurrency wallets and accounts.</Text>

                            <Text style={styles.heading}>Dos and Don'ts</Text>
                            

                            <View style={[globalStyles.grayText(), styles.infoText]}>
                                <View style={styles.bulletBox}>
                                
                                    <View><Text style={styles.bullet}>&bull;</Text></View>
                                    <View><Text style={styles.bulletText}>Do memorize your seed phrase if possible, but always keep a written copy as a backup.</Text></View>
                                </View>
                                <View style={styles.bulletBox}>
                                
                                    <View><Text style={styles.bullet}>&bull;</Text></View>
                                    <View><Text style={styles.bulletText}>Do Not store your seed phrase digitally, especially on cloud storage or email accounts.</Text></View>
                                </View>
                                <View style={styles.bulletBox}>
                                
                                    <View><Text style={styles.bullet}>&bull;</Text></View>
                                    <View><Text style={styles.bulletText}>Do Not share your seed phrase with anyone, even if they claim to be from customer support or a trustworthy entity.</Text></View>
                                </View>
                                
                            </View>

                            <Text style={styles.heading}>Conclusion</Text>
                            <Text style={[globalStyles.grayText(), styles.infoText]}>Your seed phrase is your ticket to accessing and recovering your cryptocurrency assets. Treat it with the utmost care and safeguard it diligently. Following the guidelines in this manual will help you maintain control over your funds and protect your investments from potential threats.</Text>
                            
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

export default SecureWallet