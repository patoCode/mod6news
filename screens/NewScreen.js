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
import moment from 'moment'


const NewScreen = ({ item }) => {

    favorite = (item) => () => {
        console.log("_ITEM_", item)
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
                        title='ADD'
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