import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from "react";

SplashScreen.preventAutoHideAsync()

const Layout = () => {
    const [fontsLoaded] = useFonts({
        PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
        PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
        PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf')
    })
    const onLayoutRootView = useCallback( async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])
    if (!fontsLoaded) return null 
    
    return <Stack />
}

export default Layout