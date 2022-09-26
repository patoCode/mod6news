import React, { useState, useEffect } from 'react'
import {
    NativeBaseProvider,
    Text,
    FlatList,
    Heading,
    Center,
} from 'native-base';
import { listNews } from '../../src/components/Firebase'
import FavNewScreen from '../FavNewScreen'
import Header from '../commons/Header';


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
            <Header title={screenTitle} />
            {newsData.length > 0 ? (
                <FlatList
                    data={newsData}
                    renderItem={FavNewScreen}
                />
            ) : (
                <Center>
                    <Heading bold>No se registraron noticias en tus favoritos :(</Heading>
                </Center>
            )}

        </NativeBaseProvider >
    )
}

export default FavoriteScreen