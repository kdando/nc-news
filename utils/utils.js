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
            console.log(response.data.article);
            return response.data.article;
        } else {
            return response.data.articles;
        }
        
      }
    )

}

