import React from 'react'
import {
    NativeBaseProvider,
    AspectRatio,
    Box,
    Image,
    Center,
    Stack,
    Icon,
    Heading, Text, HStack, ScrollView, Fab
} from 'native-base'
import { appColors } from '../src/config/constants'
import moment from 'moment'
import BtnFavorite from './btn/BtnFavorite';
import BtnView from './btn/BtnView';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import BtnBack from './commons/BtnBack';

const Detail = ({ navigation, route }) => {

    const item = route.params.item
    console.log("_TITLE_ ", route.params.title)
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
                        <BtnBack navigation={navigation} />
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
                            <BtnFavorite item={item} navigation={navigation} />
                            <BtnView item={item} />
                        </HStack>
                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}

export default Detail