import axios from 'axios';

let baseURL = 'https://ncnews-lh66.onrender.com/api/'

//////////////////////////////////////////////////////////////////
export const getArticles = (article_id=undefined, topic=undefined, sort_by=undefined, order=undefined) => {

    let fetchURL = baseURL + 'articles'

    //fetching one article by id...
    if (article_id !== undefined) {
        fetchURL += '/' + String(article_id)
    }

    //fetching multiple articles and allowing for queries...
    let queryNames = ["sort_by", "order"];
    let queries = [sort_by, order]

    for (let i=0; i<queries.length; i++) {
        if (queries[i] !== undefined && queries[i] !== 'undefined' && queries[i] !== null) {
            queries[i] = `${queryNames[i]}=${queries[i]}`
        }
    }

    queries = queries.filter((item) => item !== undefined && item !== 'undefined' && item !== null)

    if (queries.length > 0) {
        let queryStr = queries.join("&")
        fetchURL += '?' + queryStr
    }

    /////////CANT QUERY TOPIC AND OTHER PARAMS AT SAME TIME DUE TO BACKEND BEHAVIOUR
    ////WILL REFACTOR BACKEND TO ALLOW THIS FUNCTIONALITY
    if (topic !== undefined && topic !== 'undefined' && topic !== null) {
        fetchURL = baseURL + `articles?topic=${topic}`
    }

    return axios
    .get(fetchURL)
    .then((response) => {
        //RETURN ONE ARTICLE
        if (article_id !== undefined) {
            return response.data.article;
        //RETURN MANY ARTICLES
        } else {
            
        //SORTING HERE BECAUSE API ENDPOINT DOESN'T BEHAVE PROPERLY WITH LIVE DATA
        //ALSO UNABLE TO COMBINE TOPIC AND SORT_BY/ORDER
        //BACKEND TO BE REDRESSED

            //SORT DESCENDING
            if (order === "desc" || order === null) {

                if (sort_by !== null) {
                    response.data.articles.sort((a,b) => b[sort_by] - a[sort_by])
                } else {
                    response.data.articles.sort((a,b) => b.created_at - a.created_at)
                }
            } else {
            //SORT ASCENDING
                if (sort_by !== null) {
                    response.data.articles.sort((a,b) => a[sort_by] - b[sort_by])
                } else {
                    response.data.articles.sort((a,b) => a.created_at - b.created_at)
                }
            }

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


