import { collectionNews } from '../config/config';

import firestore from '@react-native-firebase/firestore';

export async function LogEvent(msg) {

}

export async function getUnread() {
    const fbDoc = await firestore().collection(collectionNews).where('read', '==', false).get()
    return fbDoc.size
}

export async function saveNews(news) {
    news = { ...news.item, 'read': false }
    const fbDoc = await firestore().collection(collectionNews).add(news)
    return fbDoc
}

export async function setRead(doc) {
    const readDoc = await firestore().collection(collectionNews).doc(doc.id).update({ read: true })
    return readDoc
}

export async function deleteDoc(doc) {
    const readDoc = await firestore().collection(collectionNews).doc(doc.id).delete()
    return readDoc
}

export async function findByTitle(title) {
    const fbDoc = await firestore().collection(collectionNews).where('title', '==', title).get()
    return fbDoc
}

export async function listNews() {
    const fbDocs = await firestore().collection(collectionNews).get()
    return fbDocs._docs
} 