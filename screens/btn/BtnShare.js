import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
    Center,
    useToast
} from 'native-base';
import * as RootNavigation from '../../src/components/RootNavigation';


const BtnShare = ({ item }) => {

    const handleShare = () => {
        console.log("SHARE")
    }

    return (
        <IconButton
            onPress={handleShare}
            variant='solid'
            colorScheme="indigo"
            _icon={{
                as: FontAwesome5,
                name: "share-alt"
            }} />
    )
}

export default BtnShare