import React from "react"
import { Image } from "react-native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from "./HomeScreen"
import LoginScreen from "./Login"


const Stack = createNativeStackNavigator()

function LogoApp() {
    return (
        <Image
            style={{ width: 50, height: 50 }}
            source={require('../assets/logo.png')}
        />
    )
}

const StackScreen = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={
                {
                    headerStyle: {
                        backgroundColor: "#565B8C",
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                    },
                }
            }
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
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