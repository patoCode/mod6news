import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { appColors } from '../src/config/constants';
import AllScreen from './tabs/AllScreen';
import SportScreen from './tabs/SportScreen';
import EsportScreen from './tabs/EsportScreen';
import FavoriteScreen from './tabs/FavoriteScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeScreen() {
    return (
        <Tab.Navigator
            initialRouteName='All'
            barStyle={{ backgroundColor: appColors.primary }}
            screenOptions={() => ({
                tabBarLabel: 'HELO'
            })}
        >
            <Tab.Screen
                name="All"
                component={AllScreen}
                options={{
                    tabBarLabel: 'All',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Sport"
                component={SportScreen}
                options={{
                    tabBarLabel: 'Sports',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="soccer-ball-o" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="E-Sport"
                component={EsportScreen}
                options={{
                    tabBarShowLabel: 'false',
                    tabBarLabel: 'eSport',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="gamepad" color={color} size={22} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favorite"
                component={FavoriteScreen}
                options={{
                    tabBarLabel: 'Me',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="newspaper-o" color={color} size={22} />
                    ),
                }}
            />
        </Tab.Navigator >
    )
}

export default HomeScreen