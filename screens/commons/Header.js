import React from 'react'
import {
    Box,
    IconButton,
    Heading,
    HStack,
} from 'native-base';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { appColors } from '../../src/config/constants';


const Header = ({ title }) => {
    return (
        <Box
            bg={appColors.primary}
            h='50'
        >
            <HStack space={2}>
                <Heading
                    w='85%'
                    fontSize="xl"
                    p="4"
                    pb="2"
                    color={appColors.text_white}
                >
                    {title}
                </Heading>
                <IconButton
                    w='15%'
                    variant='solid'
                    bgColor={appColors.primary}
                    _icon={{
                        as: FontAwesome5,
                        name: "power-off"
                    }}
                />
            </HStack>
        </Box >
    )
}

export default Header