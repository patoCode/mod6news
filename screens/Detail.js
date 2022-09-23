import React from 'react'
import {
    NativeBaseProvider,
    AspectRatio,
    Box,
    Image,
    Center,
    Stack,
    Heading, Text, HStack, IconButton, ScrollView
} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { appColors } from '../src/config/constants'
import moment from 'moment'
import BtnFavorite from './btn/BtnFavorite';
import BtnShare from './btn/BtnShare'
import { createIconSetFromFontello } from 'react-native-vector-icons';

const Detail = ({ navigation, route }) => {
    const item = route.params.item

    console.log("_ITEM_", item)

    let fuente = '-UNK-'
    if (typeof (item) != "undefined") {
        if (item.source != null && item.source.name != "")
            fuente = item.source.name
    }


    return (
        <NativeBaseProvider>
            <ScrollView>
                <Box alignItems="center" safeArea>
                    <Box>
                        <AspectRatio w='100%' ratio={16 / 9}>
                            <Image
                                source={{
                                    uri: item.urlToImage
                                }}
                                alt="IMG"
                            />
                        </AspectRatio>
                        <Center
                            bg={appColors.secondary}
                            position='absolute'
                            bottom='0'
                            px='3'
                            py='1.5'
                            _text={{
                                color: appColors.text_white,
                                fontWeight: '900',
                                fontSize: 'xs'
                            }}
                        >
                            {fuente}
                        </Center>
                    </Box>
                    <Stack p='4' space={3}>
                        <Heading>
                            {item.title}
                        </Heading>
                        <Text
                            fontSize='xs'
                            fontWeight='700'
                            ml='0.5'
                            mt='-1'
                            color={appColors.secondary}
                        >
                            {moment(item.publishedAt).format('LLLL')}
                        </Text>
                    </Stack>

                    <Text fontWeight='400' p='6'>
                        {item.description}
                    </Text>
                    <Box p='4'>
                        <HStack space={2} mt='5'>
                            <BtnFavorite item={item} />
                            <BtnShare />
                        </HStack>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}

export default Detail