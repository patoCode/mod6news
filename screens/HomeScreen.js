import React, { useEffect, useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

import { appColors } from '../src/config/constants';
import AllScreen from './tabs/AllScreen';
import SportScreen from './tabs/SportScreen';
import EsportScreen from './tabs/EsportScreen';
import FavoriteScreen from './tabs/FavoriteScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { getUnread } from '../src/components/Firebase';


// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function HomeScreen({ navigation }) {

    const [unread, setUnreadCount] = useState(null)

    useEffect(() => {
        handleUnread()
    }, [unread])

    handleUnread = () => {
        getUnread()
            .then(data => {
                data == 0 ? setUnreadCount(null) : setUnreadCount(data)
            })
            .catch(e => {
                alert(e)
            })
    }

    return (
        <Tab.Navigator
            initialRouteName='Favorite'
            barStyle={{ backgroundColor: appColors.primary }}
            screenOptions={() => ({
                tabBarLabel: 'HELO'
            })}
            onPress={handleUnread}
        >
            <Tab.Screen
                name="All"
                component={AllScreen}
                options={{
                    tabBarLabel: 'All',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="globe" color={color} size={22} />
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
                name="Tech"
                component={EsportScreen}
                options={{
                    tabBarShowLabel: 'false',
                    tabBarLabel: 'Technology',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="wpexplorer" color={color} size={22} />
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
                    tabBarBadge: unread
                }}
                onPress={handleUnread}
            />
        </Tab.Navigator >
    )
}

export default HomeScreen