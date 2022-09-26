import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
    IconButton,

} from 'native-base';


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