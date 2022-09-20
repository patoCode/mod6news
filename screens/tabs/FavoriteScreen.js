import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import {
    NativeBaseProvider,
    Box,
    Center,
    FlatList,
} from 'native-base';
import { listNews } from '../../src/components/Firebase'
import NewScreen from '../NewScreen'



const FavoriteScreen = () => {

    const [newsData, setNewsData] = useState([])

    useEffect(() => {
        listNews()
            .then(data => {
                console.log("_LIST FAVORITES_", data)
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
        </NativeBaseProvider >
    )
}

export default FavoriteScreen