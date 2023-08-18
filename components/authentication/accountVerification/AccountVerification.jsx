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

    const onItemPress = (gender) => {
        setGender(gender)
        setGenderDropdownVisible(false)
    }

    const DropdownItem = ({gender}) => (
        <TouchableOpacity onPress={() => onItemPress(gender)} style={styles.dropdownItem}><Text>{gender}</Text></TouchableOpacity>
    )   

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
                                <Text style={styles.inputLabel}>Gender</Text>
                                <Dropdown 
                                    placeholder="tap to select gender"
                                    iconURL={icons.dropdown}
                                    value={gender}
                                />
                                
                            </View>
                        </View>
                    
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

export default AccountVerification