import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
    IconButton,
} from 'native-base';
import * as RootNavigation from '../../src/components/RootNavigation';
import { appColors } from '../../src/config/constants';
import { setRead } from '../../src/components/Firebase';


const BtnRead = ({ item, fb, fbDoc }) => {

    const handleDetail = () => {
        if (fb) {
            setRead(fbDoc.ref).then(data => { }).catch(e => console.log(e))
        }
        RootNavigation.navigate('Detail', { item })
    }

    return (
        <IconButton
            onPress={handleDetail}
            variant='solid'
            bgColor={appColors.primary}
            rounded='lg'
            _icon={{
                as: FontAwesome5,
                name: "glasses"
            }} />
    )
}

export default BtnRead