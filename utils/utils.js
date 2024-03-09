import axios from 'axios';

let baseURL = 'https://ncnews-lh66.onrender.com/api/'

//////////////////////////////////////////////////////////////////
export const getArticles = (article_id=undefined, topic=undefined, sorted_by=undefined, order=undefined) => {

    let fetchURL = baseURL + 'articles'

    //fetching one article by id...
    if (article_id !== undefined) {
        fetchURL += '/' + String(article_id)
    }

    //fetching multiple articles and allowing for queries...
    let queryNames = ["topic", "sorted_by", "order"];
    let queries = [topic, sorted_by, order]

    //loop throu queries array, if it is given (i.e. not undefined etc) then replace value with a string made of the value but formatted for the fetch URL
    for (let i=0; i<queries.length; i++) {
        if (queries[i] !== undefined && queries[i] !== 'undefined' && queries[i] !== "" && queries[i] !== null) {
            queries[i] = `${queryNames[i]}=${queries[i]}`
        }
    }

    //remove blank queries from queries array
    queries = queries.filter((item) => item !== undefined && item !== "")

    console.log(queries)
    //if queries remain, append them to the fetch url with correct formatting
    if (queries.length > 0) {
        let queryStr = queries.join("&")
        fetchURL += '?' + queryStr
    }

    return axios
    .get(fetchURL)
    .then((response) => {
        //RETURN ONE ARTICLE
        if (article_id !== undefined) {
            return response.data.article;
        //RETURN MANY ARTICLES
        } else {
            return response.data.articles;
        }
      }
    )

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
        console.log("ERROR FETCHING COMMENTS")
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
export const getUsers = () => {

    let usersURL = baseURL + 'users'

    console.log(usersURL)

    return axios
    .get(usersURL)
    .then((response) => {
        return response;
    })
    .catch((error) => {
        return error;
    })

}
//////////////////////////////////////////////////////////////

