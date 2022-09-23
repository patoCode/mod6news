import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { services } from '../../src/components/Services'

import {
    NativeBaseProvider,
    Box,
    Center,
    FlatList,
    Heading,
} from 'native-base';


import NewScreen from '../NewScreen';
import Header from '../commons/Header';

const Esport = () => {
    let screenTitle = 'TECHNOLOGY'
    const [newsData, setNewsData] = useState([])
    useEffect(() => {
        services('technology')
            .then(data => {
                setNewsData(data)
            })
            .catch(e => {
                alert(e)
            })
    }, [])

    return (
        <NativeBaseProvider>
            <Header title={screenTitle} />
            <FlatList
                data={newsData}
                renderItem={NewScreen}
            />
        </NativeBaseProvider >)
}

export default Esport