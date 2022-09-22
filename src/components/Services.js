import { API_KEY, endpoint, country } from '../config/config'
import { findByTitle } from '../components/Firebase'

export async function services(category = 'general') {
    let articles = await fetch(`${endpoint}?country=${country}&category=${category}`, {
        headers: {
            'X-API-KEY': API_KEY
        }
    });
    let result = await articles.json();
    let toList = [];

    result.articles.forEach(element => {
        findByTitle(element.title)
            .then(data => {
                if (data != null)
                    toList.push({ ...element, 'isFavorite': true })
                else
                    toList.push({ ...element, 'isFavorite': false })
            })
            .catch(e => {
                console.log(e)
            })
    });
    console.log(toList)
    return toList
}