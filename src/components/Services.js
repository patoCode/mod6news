import { API_KEY, endpoint, country } from '../config/config'
import { findByTitle } from '../components/Firebase'

export async function services(category = 'general') {
    let articles = await fetch(`${endpoint}?country=${country}&category=${category}`, {
        headers: {
            'X-API-KEY': API_KEY
        }
    });
    let result = await articles.json();
    return result.articles;
}