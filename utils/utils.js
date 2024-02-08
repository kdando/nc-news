import axios from 'axios';

let baseURL = 'https://ncnews-lh66.onrender.com/api/'

//////////////////////////////////////////////////////////////////
export const getArticles = (article_id=undefined, topic=undefined, order=undefined) => {

    console.log(order, "<<<ORDER IN UTIL")
    console.log(topic, "<<TOPIC IN UTIL")

    let fetchURL = baseURL + 'articles'
    //get 1 article or many
    if (article_id !== undefined) {
        fetchURL += '/' + String(article_id)
    }

    //
    let queryNames = ["topic", "order"];
    let queries = [topic, order]
    console.log(typeof queries[0], "<<TYPEOF TOPIC", typeof queries[1], "<<TYPEOF ORDER");

    for (let i=0; i<queries.length; i++) {
        console.log(typeof queries[i], "<<TYPE OF ELEMENT")
        if (queries[i] !== undefined && queries[i] !== 'undefined' && queries[i] !== null) {
            queries[i] = `${queryNames[i]}=${queries[i]}`
            console.log(queries[i], "WE HERE")
        }
    }

    queries = queries.filter((item) => item !== undefined && item !== 'undefined' && item !== null)
    console.log(queries, "<<queries arr after filter");

    if (queries.length > 0) {

        let queryStr = queries.join("&")
        fetchURL += '?' + queryStr
    }

        

      

        console.log(fetchURL);
        

    // if (topic !== undefined) {
    //     fetchURL += `?topic=${topic}`
    // }

    // if (order !== undefined) {
    //     fetchURL = fetchURL + `?order=${order}`
    // }

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


