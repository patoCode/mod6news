import React from "react"
import { Image } from "react-native"
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack'


import HomeScreen from "./HomeScreen"
import LoginScreen from "./Login"
import SplashScreen from "./SplashScreen"
import { appColors } from '../src/config/constants'

const Stack = createNativeStackNavigator()

function LogoApp() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../assets/news_logo.png')}
        />
    )
}

const StackScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={
                {
                    headerMode: 'screen',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                    headerStyle: {
                        backgroundColor: appColors.primary,
                    }
                }
            }
        >
            <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{
                    headerShown: false,
                    title: '',

                }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false, }}
            />
            <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator >

    )
}

export default StackScreen