import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { services } from '../../src/components/Services'

import {
    NativeBaseProvider,
    Box,
    Center,
    FlatList,
} from 'native-base';

import NewScreen from '../NewScreen';


const AllScreen = () => {
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        services('general')
            .then(data => {
                setNewsData(data)
            })
            .catch(e => {
                alert(e)
            })
    }, [])

    return (
        <NativeBaseProvider>
            <Center flex={1} px="3">
                <Box>
                    <FlatList
                        data={newsData}
                        renderItem={NewScreen}
                    />
                </Box>
            </Center>
        </NativeBaseProvider >)
}

export default AllScreen