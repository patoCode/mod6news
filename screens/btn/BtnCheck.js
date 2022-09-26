import React from 'react'

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
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { appColors } from '../../src/config/constants';
import { deleteDoc } from '../../src/components/Firebase';

const BtnCheck = ({ item, navigation }) => {
    handleDelete = () => {
        deleteDoc(item)
            .then(data => {
                alert("Eliminacion exitósa")
                navigation.goBack()
            })
            .catch(e => { console.log(e) })
    }

    return (
        <IconButton
            variant='solid'
            bgColor={appColors.accent_check}
            _icon={{
                as: FontAwesome5,
                name: "check"
            }}
            onPress={handleDelete}
        />
    )
}

export default BtnCheck