import React, { useState, useEffect } from 'react'
import {
    NativeBaseProvider,
    Heading,
    Center,
    FlatList,
} from 'native-base';
import { listNews } from '../../src/components/Firebase'
import FavNewScreen from '../FavNewScreen'


const FavoriteScreen = () => {

    const screenTitle = 'FAVORITE'
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

    return (
        <NativeBaseProvider>
            <Center>
                <Heading fontSize="xl" p="4" pb="2">
                    {screenTitle}
                </Heading>
            </Center>
            <FlatList
                data={newsData}
                renderItem={FavNewScreen}
            />
        </NativeBaseProvider >
    )
}

export default FavoriteScreen