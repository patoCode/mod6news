import React, { useState, useEffect } from 'react'
import { services } from '../../src/components/Services'

import {
    NativeBaseProvider,
    Center,
    Heading,
    FlatList,
} from 'native-base';

import NewScreen from '../NewScreen';


const AllScreen = () => {
    let screenTitle = 'GLOBAL NEWS'
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

export default AllScreen