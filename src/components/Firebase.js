import { collectionNews } from '../config/config';

import firestore from '@react-native-firebase/firestore';

export async function LogEvent(msg) {
    console.log('LOGUEADO ', msg)
}

export async function saveNews(news) {

}

export async function listNews() {
    const res = []
    let count = 0
    const fbDocs = await firestore().collection(collectionNews).get()
    fbDocs._docs.forEach(element => {
        res.push({
            id: count,
            title: element._data.title,
            urlToImage: ''
        })
        count++
    })
    console.log(res)
    return res
} 