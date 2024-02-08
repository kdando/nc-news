import axios from 'axios';

let baseURL = 'https://ncnews-lh66.onrender.com/api/'

//////////////////////////////////////////////////////////////////
export const getArticles = (article_id=undefined, topic=undefined) => {

    let fetchURL = baseURL + 'articles'
    if (article_id !== undefined) {
        fetchURL = fetchURL + '/' + String(article_id)
    }
    if (topic !== undefined) {
        fetchURL = fetchURL + `?topic=${topic}`
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
    .catch((error) => {
        return error;
    })

}
//////////////////////////////////////////////////////////////////
export const getCommentsByArticle = (article_id=undefined) => {

    let fetchURL = baseURL + `articles/${article_id}/comments`
    
    return axios
    .get(fetchURL)
    .then((response) => {
        return response.data.comments;
    })
    .catch((error) => {
        return error;
    })

}
//////////////////////////////////////////////////////////////////
export const voteOnArticle = (article_id=undefined, increment=0) => {

    let voteURL = baseURL + `articles/${article_id}`

    return axios
    .patch(voteURL, { inc_votes: increment })
    .then((response) => {
        return response;
    })
    .catch((error) => {
        return error;
    })

}
/////////////////////////////////////////////////////////////////
export const postNewComment = (article_id=undefined, comment={}) => {

    let addCommentURL = baseURL + `articles/${article_id}/comments`

    return axios
    .post(addCommentURL, comment)
    .then((response) => {
        return response;
    })
    .catch((error) => {
        return error;
    })

}
////////////////////////////////////////////////////////////////
export const removeComment = (comment_id=undefined) => {

    let delCommentURL = baseURL + `comments/${comment_id}`

    return axios
    .delete(delCommentURL)
    .then((response) => {
        return response;
    })
    .catch((error) => {
        return error;
    })

}
///////////////////////////////////////////////////////////////


