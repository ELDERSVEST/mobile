import { useState } from "react"
import { Stack } from "expo-router"
import { View, Text, SafeAreaView, ScrollView, Image } from "react-native"
import Header from "../../common/headers/Header"
import { icons, COLORS } from "../../../constants"

import { Button, Progress, IconButton } from "../../" 

import styles from "./seedphrase.style"
import globalStyles from "../../../styles/globalStyles.style"
import { seedPhraseData } from "../../../data"



const SeedPhrase = () => {
    const [openPhrase, setOpenPhrase ] = useState(false)
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

                        <ClosedSeedPhrase 
                            openPhrase={openPhrase}
                            setOpenPhrase={setOpenPhrase}
                        /> 
                        
                        
                    </View>
                </ScrollView>
                <View style={{marginVertical: 45, }}>
                    <Button title="Next" active={openPhrase} />
                </View>
            </View>
        </View>

    </SafeAreaView>
  )
}


const ClosedSeedPhrase = ({ openPhrase, setOpenPhrase}) => {
    
    const showPhraseHandler = () => {
        setOpenPhrase((prev) => !prev)
    }
    return (
        <>
        {!openPhrase ? 
        (<View style={styles.revealPhraseBox}>
            <View style={styles.eyeIconCircle}>
                <Image
                    source={icons.seedPhraseEyeOff}
                />
            </View>
            

            <Text style={styles.boldText}>Tap the button below to reveal {"\n"} your Seed Pharse</Text>

            <Text style={globalStyles.grayText}>Please ensure you are alone</Text>
            <View style={styles.button}>
                <Button 
                    title="View" 
                    onPress={showPhraseHandler}
                />
            </View>

        </View>) : (<OpenSeedPhrase />)
        }
        </>
    )
}

const OpenSeedPhrase = () => {
    return (
        <View style={styles.phraseContainer}>
            {seedPhraseData.map((phrase, index) => (
                <View 
                    key={ phrase.id }
                    style={styles.phraseBox}
                    >
                    <View style={styles.phraseNumber}><Text>{ index + 1 }</Text></View>
                    <View style={styles.phraseText}><Text> { phrase.title }</Text></View>
                </View>
            ))}

            <View style={styles.copyButtonBox}>
            <IconButton 
                title="Copy" 
                icon={icons.copy} 
                buttonStyles={
                    {
                        iconSize: 18,
                        width: 100,
                    }
                }
            />
            </View>

        </View>
    )
}




export default SeedPhrase