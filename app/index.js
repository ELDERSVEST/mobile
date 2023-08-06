import { Stack } from 'expo-router'
import { View, Text, TextInput, Dimensions, StyleSheet, SafeAreaView, ImageBackground, Image, ScrollView, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONT, icons, images } from '../constants'
import Onboarding from './onboard'
import { Button, OnboardScreenHeaderButton, ScreenHeaderButton } from '../components'

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
  

const Home = () => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <View style={{ flex: 1 }}>
                <View style={styles.imageContainer}>           
                    <ImageBackground 
                        source={images.onboardingbg1}
                        style={styles.backgroundImage}
                        resizeMode="cover"
                        imageStyle={{
                            borderRadius: 20 
                            // borderBottomRightRadius: 20,
                            // borderBottomLeftRadius: 20,
                        }}
                    >
                        <Stack.Screen 
                        options={{
                            headerShown: false ,
                            headerStyle: {
                            },
                            headerShadowVisible: false,
                            headerLeft: () => (
                                <TouchableOpacity>
                                    <Text>Skip</Text>
                                </TouchableOpacity>
                            ),
                            headerRight: () => (
                                <ScreenHeaderButton iconURL={icons.logo} />
                            ),
                            headerTitle: ""
                        }}
                        
                        />
                        <OnboardScreenHeaderButton />
                    </ImageBackground>              
                </View>
                <View 
                    style={{
                        flex: 1,
                        padding: SIZES.large,
                        paddingBottom: 45,
                        flexDirection: "column",
                        justifyContent: "space-between"
                    }}
                >
                    <View>
                        <Text style={styles.welcomeHeader}>Welcome to Crifs Investment</Text> 
                        <Text style={styles.grayText}>Our app is designed to help you invest your money wisely and achieve your financial goals. Let’s get started</Text>
                        <Text style={styles.boldText}>We are thrilled to have you onboard!</Text>

                        <View style={styles.tabDots}>
                            <View style={styles.activeTab} />
                            <View style={styles.normalTab} />
                        </View>
                    </View>
                    <View>
                        <Button title="Next" />
                    </View>
                </View>

            </View>
            
        </SafeAreaView>
        
    )
}

export default Home

const styles = StyleSheet.create({
    imageContainer: {
        height: 434,
    },
    backgroundImage: {
        flex: 1,
    },
    welcomeHeader: {
        color: COLORS.secondary,
        fontSize: SIZES.large,
        fontWeight: 700,
        fontFamily: FONT.regular,
        marginBottom: 20,
        marginTop: 50,
    }, 
    grayText: {
        color: COLORS.grayText,
        fontFamily: FONT.regular,
        fontWeight: 400,
        fontSize: 12,
    },
    boldText: {
        color: COLORS.blackText,
        fontSize: 14,
        fontWeight: 600,
        fontFamily: FONT.regular,
        marginTop: 10,
    },
    tabDots: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    activeTab: {
        width: 20,
        height: 10,
        borderRadius: 20,
        backgroundColor: COLORS.secondary,
        margin: 10
    },
    normalTab: {
        width: 10,
        height: 10,
        borderRadius: 20,
        backgroundColor: 'rgba(248, 160, 27, 0.50)'
    }
    
  });