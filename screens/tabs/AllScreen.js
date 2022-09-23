import React, { useState, useEffect } from 'react'
import { services } from '../../src/components/Services'

import {
    NativeBaseProvider,
    Center,
    Heading,
    FlatList,
    View
} from 'native-base';

import NewScreen from '../NewScreen';
import { SafeAreaView } from 'react-native';
import { appColors } from '../../src/config/constants';
import Header from '../commons/Header';


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
            <View>
                <Header title={screenTitle} />
                <FlatList
                    background="#EFEFF5"
                    data={newsData}
                    renderItem={NewScreen}
                />
            </View>
        </NativeBaseProvider >)
}

export default AllScreen