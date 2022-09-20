import { collectionNews } from '../config/config';

import firestore from '@react-native-firebase/firestore';

export async function LogEvent(msg) {

}

export async function saveNews(news) {
    const fbDoc = await firestore().collection(collectionNews).add(news)
    return fbDoc
}

export async function listNews() {
    const res = []
    const fbDocs = await firestore().collection(collectionNews).get()
    return fbDocs._docs
} 