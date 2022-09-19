import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllScreen from './tabs/AllScreen';
import SportScreen from './tabs/SportScreen';
import EsportScreen from './tabs/EsportScreen';
import FavoriteScreen from './tabs/FavoriteScreen';

const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="All News" component={AllScreen} options={{ tabBarBadge: 2 }} />
            <Tab.Screen name="Sport" component={SportScreen} />
            <Tab.Screen name="E-Sport" component={EsportScreen} />
            <Tab.Screen name="Favorite" component={FavoriteScreen} />
        </Tab.Navigator >
    )
}

export default HomeScreen