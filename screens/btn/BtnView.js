import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
    IconButton,

} from 'native-base';
import { appColors } from '../../src/config/constants';
import { Linking } from 'react-native';


const BtnView = ({ item }) => {
    return (
        <IconButton
            onPress={() => Linking.openURL(item.url)}
            variant='solid'
            background={appColors.primary}
            _icon={{
                as: FontAwesome5,
                name: "globe"
            }} />
    )
}

export default BtnView