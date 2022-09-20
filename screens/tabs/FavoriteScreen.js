import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import {
    NativeBaseProvider,
    Box,
    Center,
    FlatList,
} from 'native-base';
import { listNews } from '../../src/components/Firebase'
import FavNewScreen from '../FavNewScreen'


const FavoriteScreen = () => {

    const [newsData, setNewsData] = useState([])



    useEffect(() => {
        listNews()
            .then(data => {
                setNewsData(data)
            })
            .catch(e => {
                alert(e)
            })
    }, [newsData])

    useEffect(() => {
        listNews()
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
                        renderItem={FavNewScreen}
                    />
                </Box>
            </Center>
        </NativeBaseProvider >
    )
}

export default FavoriteScreen