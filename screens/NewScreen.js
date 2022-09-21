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
    IconButton,
    AspectRatio,
    Center
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { saveNews } from '../src/components/Firebase';
import { appColors, appDimensions } from '../src/config/constants';
import * as RootNavigation from './../src/components/RootNavigation';

import moment from 'moment'

const NewScreen = ({ item }) => {

    favorite = (item) => () => {
        saveNews(item.item)
            .then(data => {
            })
            .catch(e => { alert(e) })
    }

    const handleDetail = () => {
        RootNavigation.navigate('Detail', { item })
    }
    /*<PostTime>{moment(item.postTime.toDate()).fromNow()}</PostTime> */

    console.log("_ITEM_ ", item)
    const author = item.source.id

    console.log("_AUTHOR_ ", author)
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
                    <IconButton
                        onPress={handleDetail}
                        variant='solid'
                        _icon={{
                            as: FontAwesome,
                            name: "book"
                        }} />

                    <IconButton
                        variant='solid'
                        colorScheme="indigo"
                        _icon={{
                            as: FontAwesome,
                            name: "share-alt"
                        }} />
                    <IconButton
                        variant='outline'
                        _icon={{
                            as: FontAwesome,
                            name: "heart-o"
                        }}
                        onPress={this.favorite({ item })}
                    />
                </HStack>


            </VStack>
            <Spacer />
        </Box >
    )
}

export default NewScreen