import { Stack } from "expo-router"
import { View, Text, SafeAreaView, ScrollView, Image, TextInput, FlatList, TouchableOpacity } from "react-native"
import DatePicker from 'react-native-datepicker'
import CountryPicker, {CountryModalProvider} from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';


import {Header, Input, } from "../../"
import { icons, COLORS, images } from "../../../constants"
import { Button, Dropdown,  } from "../../"

import styles from "./accountVerification.style"
import globalStyles from "../../../styles/globalStyles.style"
import { cloneElement, useState } from "react"

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
    const [countryCode, setCountryCode] = useState('NG');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [DOB, setDOB] = useState('');

    const handleCountrySelect = (country) => {
        setCountryCode(country.phoneCode)
    }

    const handlePhoneNumberChange = (number) => {
        setPhoneNumber(number)
    }
    const handleDOBChange = (date) => {
        setDOB(date)
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
                                <Text style={styles.phoneLabel}>Date of Birth</Text>
                                <View style={styles.dobContainer}>
                                    <DatePicker 
                                        placeholder="tap to select DOB"
                                        date={DOB}
                                        onDateChange={handleDOBChange}
                                        mode="date"
                                        format="YYYY-MM-DD"
                                        showIcon={false}
                                        style={styles.datePicker}
                                        confirmBtnText="Confirm"
                                        cancelBtnText="Cancel"
                                        customStyles={{
                                            dateInput: {
                                              borderWidth: 0, // Remove border
                                              alignItems: "flex-start"
                                            },
                                            dateText: {
                                                color: COLORS.blackText,
                                                fontSize: 14,
                                                fontWeight: 500,
                                                letterSpacing: 0.28,
                                              },
                                              placeholderText: {
                                                color: COLORS.grayText,
                                                fontSize: 10,
                                                fontWeight: 400,
                                                letterSpacing: 0.2,
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
                            <CountryModalProvider>
                            <View style={{ marginTop: 30, }}>
                                <Text style={styles.phoneLabel}>Phone Number</Text>
                                <View style={styles.phoneContainer}>
                                    <CountryPicker 
                                        withFilter
                                        withAlphaFilter
                                        withFlag
                                        withCallingCode
                                        withEmoji
                                        countryCode={countryCode}
                                        // withFlagButton
                                    />
                                    <PhoneInput 
                                        flagStyle={{display: "none"}}
                                        initialCountry={countryCode}
                                        initialValue="9096426964"
                                        textProps={{
                                            placeholder: "type number..."
                                        }}
                                        style={{
                                            height: 40,
                                            flex: 1,
                                        }}
                                        textComponent={ () => (<View style={{flex: 1, flexDirection: "row", height: 40, justifyContent: "center", alignItems: "center", paddingVertical: 7,}}><Text>{`+${country.phoneCode ? country.phoneCode : ''}`}</Text><View style={styles.divider} /><TextInput style={{
                                            flex: 1,
                                            height: 40,
                                        }} /></View>)}
                                    />
                                </View>
                            </View>
                            </CountryModalProvider>
                                
                                
                        {/* </View> */}
                            {/* <View style={{marginTop: 30}}>
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
                            </View> */}
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