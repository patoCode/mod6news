import React from 'react'
import {
    IconButton,

} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { saveNews } from '../../src/components/Firebase';
import { appColors } from '../../src/config/constants';


const BtnFavorite = (item) => {


    favorite = (item) => () => {
        saveNews(item.item)
            .then(data => {
                alert("La noticia fue agregada a favoritos")
            })
            .catch(e => { alert(e) })
    }

    return (
        <IconButton
            variant='outline'
            colorScheme='pink'
            _icon={{
                as: FontAwesome,
                name: "heart-o"
            }}
            onPress={this.favorite({ item })}
        />
    )
}

export default BtnFavorite