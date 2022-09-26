import React from "react"
import { Image } from "react-native"
import { createNativeStackNavigator, TransitionPresets } from '@react-navigation/native-stack'

import HomeScreen from "./HomeScreen"
import LoginScreen from "./Login"
import SplashScreen from "./SplashScreen"
import { appColors } from '../src/config/constants'
import Detail from "./Detail"
import DetailFav from "./DetailFav"
import FavoriteScreen from "./tabs/FavoriteScreen"


const Stack = createNativeStackNavigator()

const StackScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName="Splash"
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
                name="Favorite"
                component={FavoriteScreen}
                options={{ headerShown: false, }}
            />
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false, }}
            />
            <Stack.Screen
                name="DetailFav"
                component={DetailFav}
                options={{ headerShown: false, }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
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