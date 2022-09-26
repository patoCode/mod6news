import React, { useEffect, useState } from 'react'
import { Button, TouchableOpacity } from 'react-native';
import {
    Box,
    Text,
    HStack,
    VStack,
    Heading,
    AspectRatio,
    Image,
    Stack
} from 'native-base';
import moment from 'moment'
import { appColors, appDimensions } from '../src/config/constants';
import * as RootNavigation from '../src/components/RootNavigation';

const FavNewScreen = ({ item }) => {

    handleDetail = () => {
        RootNavigation.navigate('DetailFav', { item })
    }

    const fbItem = item._data
    let fuente = '- UNK -'

    if (typeof (fbItem) != 'undefined' && (fbItem.source != null && fbItem.source.name !== ""))
        fuente = fbItem.source.name



    return (
        <TouchableOpacity
            onPress={handleDetail}
        >
            <Box
                m='2'
                p='4'
                pr='0'
                background='#fff'
            >
                <HStack
                    space={2}
                >
                    <Box
                        w='70%'
                    >
                        <Text
                            fontWeight='400'
                            fontSize='xs'
                            color={appColors.app_light_gray}
                        >
                            Fuente: {fuente}
                        </Text>
                        <Heading
                            fontWeight='700'
                            fontSize='md'
                        >
                            {fbItem.title}
                        </Heading>
                        <Text fontSize='xs' color={appColors.app_light_gray}>
                            {moment(fbItem.publishedAt).fromNow()}
                        </Text>

                    </Box>
                    <Image
                        w='30%'
                        source={{
                            uri: fbItem.urlToImage
                        }}
                        alt="IMG"
                        borderTopLeftRadius='lg'
                        borderBottomLeftRadius='lg'
                    />
                </HStack>
            </Box>
        </TouchableOpacity>
    )
}



export default FavNewScreen