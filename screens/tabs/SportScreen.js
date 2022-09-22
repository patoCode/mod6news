import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { services } from '../../src/components/Services'

import {
    NativeBaseProvider,
    Box,
    Center,
    Heading,
    FlatList,
} from 'native-base';

import NewScreen from '../NewScreen';


const SportScreen = () => {
    let screenTitle = 'SPORT'
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        services('sport')
            .then(data => {
                setNewsData(data)
            })
            .catch(e => {
                alert(e)
            })
    }, [])

    return (
        <NativeBaseProvider>
            <Center>
                <Heading fontSize="xl" p="4" pb="2">
                    {screenTitle}
                </Heading>
            </Center>
            <FlatList
                data={newsData}
                renderItem={NewScreen}
            />
        </NativeBaseProvider >)
}

export default SportScreen