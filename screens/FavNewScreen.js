import React, { useEffect } from 'react'
import { Button, TouchableOpacity } from 'react-native';
import {
    Box,
    Text,
    Avatar,
    HStack,
    VStack,
    Spacer,
} from 'native-base';

import { saveNews } from '../src/components/Firebase';

import moment from 'moment'


const FavNewScreen = ({ item }) => {
    const fbItem = item._data

    console.log(fbItem)

    return (
        <Box borderBottomWidth="1" py="2" pl={["0", "4"]} pr={["0", "5"]}>
            <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar
                    size='48px'
                    source={{ uri: fbItem.urlToImage }}
                ></Avatar>
                <VStack>
                    <Text bold>{fbItem.title}</Text>
                    <Text>{fbItem.description}</Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" alignSelf="flex-start">
                    {moment(fbItem.publishedAt).format('LLLL')}
                </Text>

            </HStack>
        </Box>
    )
}

export default FavNewScreen