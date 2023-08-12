import { Stack } from "expo-router"
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native"
import Header from "../../common/headers/Header"
import { icons, COLORS } from "../../../constants"

import { Button, Progress } from "../../" 

import styles from "./seedphrase.style"
import globalStyles from "../../../styles/globalStyles.style"

const RevealSeedPhrase = () => {
    return (
        <View style={styles.revealPhraseBox}>
            <View style={styles.eyeIconCircle}>
                <Image
                    source={icons.seedPhraseEyeOff}
                />
            </View>
            

            <Text style={styles.boldText}>Tap the button below to reveal {"\n"} your Seed Pharse</Text>

            <Text style={globalStyles.grayText}>Please ensure you are alone</Text>
            <View style={styles.button}>
                <Button title="View" />
            </View>

        </View>
    )
}

const SeedPhrase = () => {
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
                        <Text style={globalStyles.headerText}>Write down your seed phrase</Text>

                        <Text style={[globalStyles.grayText(), styles.infoText]}>Create multiple backups of your seed phrase. If possible, make two or more copies and store them in different secure locations. This ensures that you have a backup in case one copy is lost or damaged.</Text>

                        <View style={styles.revealPhraseBox}>

                        </View>
                    </View>
                </ScrollView>
                <View style={{marginVertical: 45, }}>
                    <Button title="Next" active={false} />
                </View>
            </View>
        </View>

    </SafeAreaView>
  )
}

export default SeedPhrase