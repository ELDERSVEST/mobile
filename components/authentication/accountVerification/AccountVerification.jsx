import { Stack } from "expo-router"
import { View, Text, SafeAreaView, ScrollView, Image, ImageBackground, FlatList, TouchableOpacity } from "react-native"
import {Header, Input} from "../../"
import { icons, COLORS, images } from "../../../constants"
import { Button, Dropdown } from "../../"

import styles from "./accountVerification.style"
import globalStyles from "../../../styles/globalStyles.style"
import { useState } from "react"

genderData = ["Male", "Female"]

const AccountVerification = () => {
    const [gender, setGender] = useState('')
    const [genderDropdownVisible, setGenderDropdownVisible] = useState(false)

     

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
                title="Account Verification Page"
            />
            <View style={globalStyles.contentBox}>
                <ScrollView
                    alwaysBounceVertical={false}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.container}>
                        <Text style={globalStyles.grayText(14)}>Fill in the required personal information.</Text>
                        <View style={styles.inputBox}>
                            <View style={{marginTop: 30}}>
                                <Dropdown 
                                    label="Gender"
                                    placeholder="tap to select gender"
                                    iconURL={icons.dropdown}
                                    value={gender}
                                    items={genderData}
                                    setValue={setGender}
                                    dropdownVisible={genderDropdownVisible}
                                    setDropdownVisible={setGenderDropdownVisible}
                                />
                                
                            </View>
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

export default AccountVerification