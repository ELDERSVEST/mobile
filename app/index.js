import { Stack } from 'expo-router'
import { View, Text, TextInput, Dimensions, StyleSheet, SafeAreaView, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONT, icons, images } from '../constants'
import Onboarding from './onboard'
import { Onboard, OnboardScreenHeaderButton, CreatePassword } from '../components'
import RegistrationPage from './registration'
import AuthenticationPage from './authentication'

// const screenHeight = Dimensions.get('window').height;
// const screenWidth = Dimensions.get('window').width;
  

const Home = () => {
    return (
        // <Onboard />
        // <CreatePassword />
        // <RegistrationPage />
        <AuthenticationPage />
        
    )
}

export default Home
