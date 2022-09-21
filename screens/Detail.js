import React from 'react'
import {
    NativeBaseProvider,
    AspectRatio,
    Box,
    Image,
    Center,
    Stack,
    Heading, Text, VStack, HStack, IconButton, ScrollView
} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { appColors } from '../src/config/constants'
import moment from 'moment'

const Detail = ({ navigation, route }) => {

    const item = route.params.item



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
                            {item.author}
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
                        <HStack space={2} mt='10'>
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

                    </Box>
                </Box>
            </ScrollView>
        </NativeBaseProvider>
    )
}

export default Detail