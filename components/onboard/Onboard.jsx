import { Stack } from 'expo-router'
import { View, Text, Dimensions, SafeAreaView, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
import { COLORS, SIZES, FONT, icons, images } from '../../constants'
import { Button, OnboardScreenHeaderButton, ScreenHeaderButton } from '../../components'

import styles from './onboard.style'

// const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const Onboard = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <ScrollView 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            style={{flex: 1,}}
        >
            <View style={{ flex: 1, width: screenWidth }}>
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
                        <OnboardScreenHeaderButton text={true} />
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
            <View style={{ flex: 1, width: screenWidth }}>
                <View style={styles.imageContainer}>           
                    <ImageBackground 
                        source={images.onboardingbg2}
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
                        <OnboardScreenHeaderButton text={false} />
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
                        <Text style={styles.welcomeHeader}>Create account</Text> 
                        <Text style={styles.grayText}>To use this app, you need to create an account. It’s a quick and easy process. Once you’re done, you’ll be ready to start investing </Text>
                        <Text style={styles.boldText}>Here are few steps to help you set up an account with Crifs</Text>

                        <View style={styles.tabDots}>
                            <View style={styles.normalTab} />
                            <View style={styles.activeTab} />
                        </View>
                    </View>
                    <View>
                        <Button title="Get Started" />
                        <View style={{marginTop: 20, }}>
                            <Text style={{fontSize:10, fontWeight: 400}}>By continuing, you agree to our <Text style={{color: COLORS.secondary}}>Terms of services and privacy policy</Text></Text>
                        </View>
                        
                    </View>
                </View>

            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Onboard

        