import { Stack } from "expo-router"
import { View, Text, SafeAreaView, ScrollView, Image, TextInput, ImageBackground, FlatList, TouchableOpacity } from "react-native"
import DatePicker from 'react-native-datepicker'
import {Header, Input, } from "../../"
import { icons, COLORS, images } from "../../../constants"
import { Button, Dropdown,  } from "../../"

import styles from "./accountVerification.style"
import globalStyles from "../../../styles/globalStyles.style"
import { useState } from "react"

genderData = ["Male", "Female"]
verificationChannelData = ["Bank Verification Number", "National ID"]
countryData = ["England", "Ghana", "Nigeria", "Zambia"]

const AccountVerification = () => {
    const [gender, setGender] = useState('')
    const [genderDropdownVisible, setGenderDropdownVisible] = useState(false)
    const [verificationChannel, setVerificationChannel] = useState('')
    const [verificationChannelDropdownVisible, setVerificationDropdownVisible] = useState(false)
    const [country, setCountry] = useState('')
    const [countryDropdownVisible, setCountryDropdownVisible] = useState(false)
    const [phone, setPhone] = useState('')
    const handlePhoneChange = (text) => {
        setPhone(text)
    }
    

     

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
                                    dropdownHeader = "Select Gender"
                                    placeholder="tap to select gender"
                                    iconURL={icons.dropdown}
                                    value={gender}
                                    items={genderData}
                                    setValue={setGender}
                                    dropdownVisible={genderDropdownVisible}
                                    setDropdownVisible={setGenderDropdownVisible}
                                />
                                
                            </View>
                            <View style={{marginTop: 30}}>
                                <View style={styles.phoneContainer}>
                                    <DatePicker 
                                        mode="date"
                                        format="YYYY-MM-DD"
                                        showIcon={false}
                                        style={styles.datePicker}
                                        customStyles={{
                                            dateInput: {
                                              borderWidth: 0, // Remove border
                                            },
                                            dateText: {
                                              fontSize: 18, // Customize text size
                                            //   color: 'blue', // Customize text color
                                            },
                                            // Customize other styles as needed
                                          }}
                                          locale={'en'}
                                    />
                                    <View style={styles.divider} />
                                    <Image 
                                        source={icons.dropdown}
                                    />
                                </View>
                                
                            </View>
                            <View style={{marginTop: 30}}>
                                <Text style={styles.phoneLabel}>Phone Number</Text>

                                <View style={styles.phoneContainer}>
                                    <Image 
                                        source={phone === "" ? icons.phoneImageBg : icons.nigeria}
                                    />
                                    <Text style={styles.countryCode}>+234</Text>
                                    <View style={styles.divider} />
                                    <TextInput 
                                        value={phone}
                                        onChangeText={handlePhoneChange}
                                        style={styles.phoneBox}
                                        placeholder="type number"
                                        keyboardType="numeric"
                                    />
                                    
                                </View>
                            </View>
                            <View style={{marginTop: 30}}>
                                <Dropdown 
                                    label="Country"
                                    dropdownHeader = "Select Country"
                                    placeholder="tap to select country"
                                    iconURL={icons.dropdown}
                                    value={country}
                                    items={countryData}
                                    setValue={setCountry}
                                    dropdownVisible={countryDropdownVisible}
                                    setDropdownVisible={setCountryDropdownVisible}
                                />
                                
                            </View>
                            <View style={{marginTop: 30}}>
                                <Dropdown 
                                    label="Verification Channel"
                                    dropdownHeader = "Select Channel"
                                    placeholder="tap to select verification channel"
                                    iconURL={icons.dropdown}
                                    value={verificationChannel}
                                    items={verificationChannelData}
                                    setValue={setVerificationChannel}
                                    dropdownVisible={verificationChannelDropdownVisible}
                                    setDropdownVisible={setVerificationDropdownVisible}
                                />
                                
                            </View>
                            { verificationChannel !== "" && <View  style={{marginTop: 30}}>
                                <Input label={verificationChannel} placeholder="" />
                            </View>}
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