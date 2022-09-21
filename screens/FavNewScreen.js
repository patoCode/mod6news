import React, { useEffect } from 'react'
import { Button, TouchableOpacity } from 'react-native';
import {
    Box,
    Text,
    Avatar,
    HStack,
    VStack,
    Spacer,
    Heading,
    IconButton
} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import moment from 'moment'
import { appColors, appDimensions } from '../src/config/constants';

const FavNewScreen = ({ item }) => {
    const fbItem = item._data



    return (
        <Box
            p="6"
            borderBottomColor={appColors.app_separator}
            borderBottomWidth='4'
        >
            <HStack space={[3, 0]} justifyContent="space-between">
                <Avatar
                    size='md'
                    source={{ uri: fbItem.urlToImage }}
                />
                <VStack>
                    <Heading size='md'>
                        {fbItem.title}
                    </Heading>
                    <Text
                        fontSize='10px'
                        fontWeight='500'
                        mt='-1'
                    >
                        {fbItem.description}
                    </Text>
                    <HStack space={2} mt='10'>
                        <IconButton
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
                <Text fontSize="xs" alignSelf="flex-start">
                    {moment(fbItem.publishedAt).format('LLLL')}
                </Text>
            </HStack>
        </Box >
    )
}

export default FavNewScreen