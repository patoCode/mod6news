import { Fab, Icon } from 'native-base'
import React from 'react'
import { appColors } from '../../src/config/constants'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BtnBack = ({ navigation }) => {
    return (
        <Fab
            onPress={() => navigation.goBack()}
            bg={appColors.primary}
            placement='top-left'
            icon={
                <Icon
                    color="white"
                    as={FontAwesome}
                    name="arrow-left"
                />
            }
        />
    )
}

export default BtnBack