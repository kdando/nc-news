import axios from 'axios';


export const getArticles = (article_id=undefined) => {

    const fetchURL = 'https://ncnews-lh66.onrender.com/api/articles'

    // if (article_id !== undefined) {
    //     fetchURL = fetchURL + String(article_id
    // }

    console.log(article_id)

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

