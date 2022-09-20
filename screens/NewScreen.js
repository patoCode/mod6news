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


const NewScreen = ({ item }) => {

    favorite = (item) => () => {
        saveNews(item.item)
            .then(data => {
                console.log("_SAVE IS_ ", data)
            })
            .catch(e => { alert(e) })
    }


    return (
        <Box borderBottomWidth="1" py="2" pl={["0", "4"]} pr={["0", "5"]}>
            <HStack space={[2, 3]} justifyContent="space-between">
                <Avatar
                    size='48px'
                    source={{ uri: item.urlToImage }}
                ></Avatar>
                <VStack>
                    <Text bold>{item.title}</Text>
                    <Text>{item.description}</Text>

                    <Button
                        style={{ width: '100px' }}
                        title='FAVORITE'
                        onPress={this.favorite({ item })}
                    />
                </VStack>
                <Spacer />
                <Text fontSize="xs" alignSelf="flex-start">
                    {moment(item.publishedAt).format('LLLL')}
                </Text>

            </HStack>
        </Box>
    )
}

export default NewScreen