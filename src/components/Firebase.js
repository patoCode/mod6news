import { collectionNews } from '../config/config';

import firestore from '@react-native-firebase/firestore';

export async function LogEvent(msg) {
    console.log('LOGUEADO ', msg)
}

export async function saveNews(news) {
    console.log("_FBSAVE_ ", news)
    const fbDoc = await firestore().collection(collectionNews).add(news)
    return fbDoc
}

export async function listNews() {
    const res = []
    let count = 0
    const fbDocs = await firestore().collection(collectionNews).get()
    console.log("_LIST FAV_ ", fbDocs._docs)
    return fbDocs._docs
} 