import axios from 'axios';

export const getArticles = (article_id=undefined) => {

    let fetchURL = 'https://ncnews-lh66.onrender.com/api/articles'
    if (article_id !== undefined) {
        fetchURL = fetchURL + "/" + String(article_id)
    }

    return axios
    .get(fetchURL)
    .then((response) => {
        if (article_id !== undefined) {
            return response.data.article;
        } else {
            return response.data.articles;
        }
      }
    )

}

export const getCommentsByArticle = (article_id=undefined) => {

    let fetchURL = `https://ncnews-lh66.onrender.com/api/articles/${article_id}/comments`
    
    return axios
    .get(fetchURL)
    .then((response) => {
        return response.data.comments;
    })

}

