import React from 'react'
import {
    IconButton,

} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { saveNews } from '../../src/components/Firebase';
import { appColors } from '../../src/config/constants';


const BtnFavorite = ({ item, navigation }) => {

    favorite = (item) => () => {
        saveNews(item)
            .then(data => {
                alert("La noticia fue agregada a favoritos")
                navigation.navigate('Favorite')
            })
            .catch(e => { alert(e) })
    }

    return (
        <IconButton
            variant='solid'
            bg={appColors.love}
            _icon={{
                as: FontAwesome,
                name: "heart"
            }}
            onPress={this.favorite({ item })}
        />
    )
}

export default BtnFavorite