import React, { useEffect, useState } from 'react'
import { Button, TouchableOpacity } from 'react-native';
import {
    Box,
    Text,
    Image,
    Avatar,
    HStack,
    VStack,
    Spacer,
    Heading,
    AspectRatio,
} from 'native-base';

import { appColors } from '../src/config/constants';
import * as RootNavigation from './../src/components/RootNavigation';

import moment from 'moment'

const NewScreen = ({ item }) => {
    let author = ''
    author = item.source.id

    if (author === '' || author === 'anónimo' || author === null)
        author = 'AN'


    const handleDetail = () => {
        RootNavigation.navigate('Detail', { item, title: item.title })
    }


    return (
        <Box
            background='#fff'
            m='4'
        >
            <VStack space={0}>
                <AspectRatio w='100%' ratio={16 / 6}>
                    <Image
                        source={{
                            uri: item.urlToImage
                        }}
                        alt="IMG"
                        borderTopLeftRadius='lg'
                        borderTopRightRadius='lg'
                    />
                </AspectRatio>
                <Box p='4'>
                    <VStack>
                        <TouchableOpacity
                            onPress={handleDetail}
                        >
                            <Heading
                                size='sm'
                                opacity='70'
                                bg={appColors.secondary}
                                mt='-50'
                                color='#fff'
                                p='3'
                                borderRadius='lg'
                            >
                                {item.title}
                            </Heading>
                        </TouchableOpacity>
                        <Text fontSize='xs' color={appColors.text_paragraph} mt='4'>
                            {item.description}
                        </Text>
                        <Text bold
                            fontSize="xs"
                            alignSelf="flex-end"
                            mt='4'
                            color={appColors.text_blod}>
                            {moment(item.publishedAt).fromNow()}
                        </Text>
                    </VStack>

                </Box>
            </VStack>
        </Box>
    )
}

export default NewScreen