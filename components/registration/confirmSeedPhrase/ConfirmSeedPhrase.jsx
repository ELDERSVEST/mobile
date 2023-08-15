import { useState } from "react"
import { Stack } from "expo-router"
import { View, Text, SafeAreaView, ScrollView } from "react-native"
import Header from "../../common/headers/Header"
import { icons, COLORS } from "../../../constants"
import { Button, Progress } from "../../" 

import styles from "./confirmSeedPhrase.style"
import globalStyles from "../../../styles/globalStyles.style"
import { confirmSeedPhraseData, seedPhraseData } from "../../../data"



const ConfirmSeedPhrase = () => {
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
                        <Text style={globalStyles.headerText}>Confirm Seed Phrase</Text>

                        <Text style={[globalStyles.grayText(), styles.infoText]}>Select each word in the order it was presented to you</Text>

                        <View style={styles.phraseContainer}>
                            {seedPhraseData.map((phrase, index) => (
                                <View 
                                    key={ phrase.id }
                                    style={styles.phraseBox}
                                >
                                    <View style={styles.phraseNumber}><Text>{ index + 1 }</Text></View>
                                    <View 
                                        style={ 
                                            index === 7 ? styles.confirmPhraseText :
                                            index === 9 ?  styles.phraseText(true) :
                                            styles.phraseText()
                                        }
                                    >
                                        <Text> { index === 7 || index === 9 ? "" : phrase.title }</Text>
                                    </View>
                                </View>
                            ))}

                        </View>

                        <View style={styles.confirmPhraseContainer}>
                            {confirmSeedPhraseData.map((phrase, index) => (
                                <View 
                                    key={ phrase.id }
                                    style={styles.confirmPhraseBox}
                                >
                                    <View style={styles.confirmPhraseText}><Text> { index !== 0 ? phrase.title : "" }</Text></View>
                                </View>
                            ))}
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

export default ConfirmSeedPhrase