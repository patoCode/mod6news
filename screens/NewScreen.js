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

import BtnRead from './btn/BtnRead';
import BtnShare from './btn/BtnShare';
import BtnFavorite from './btn/BtnFavorite';


const NewScreen = ({ item }) => {
    let author = ''
    author = item.source.id

    if (author === '' || author === 'anónimo' || author !== null)
        author = 'AN'

    return (
        <Box
            p="6"
            borderBottomColor={appColors.app_separator}
            borderBottomWidth='4'
        >
            <HStack space={2}>
                <Avatar
                    bg='green.500'
                >
                    {author}
                </Avatar>
                <VStack>
                    <Heading size='xs'>
                        {item.author}
                    </Heading>
                    <Text fontSize="xs" alignSelf="flex-start">
                        {moment(item.publishedAt).fromNow()}
                    </Text>
                </VStack>
            </HStack>
            <VStack>
                <Heading size='md'>
                    {item.title}
                </Heading>
                <AspectRatio w='100%' ratio={16 / 9}>
                    <Image
                        source={{
                            uri: item.urlToImage
                        }}
                        alt="IMG"
                    />
                </AspectRatio>

                <HStack space={2} mt='1'>
                    <BtnRead item={item} fb="false" />
                    <BtnShare />
                    <BtnFavorite item={item} />
                </HStack>


            </VStack>
            <Spacer />
        </Box >
    )
}

export default NewScreen