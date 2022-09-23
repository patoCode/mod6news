import React from "react"
import { Image } from "react-native"
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack'

import HomeScreen from "./HomeScreen"
import LoginScreen from "./Login"
import SplashScreen from "./SplashScreen"
import { appColors } from '../src/config/constants'
import Detail from "./Detail"
import DetailFav from "./DetailFav"


const Stack = createNativeStackNavigator()

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
                name="DetailFav"
                component={DetailFav}
                options={{}}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{}}
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