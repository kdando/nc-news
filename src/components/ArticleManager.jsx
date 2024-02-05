import ArticleList from './ArticleList'

import axios from 'axios';
import { useState, useEffect } from 'react'


//STATES CREATED HERE:
//articles

//STATES NEEDED HERE:
//topics, filterQueries


export default function ArticleManager ({ topics }) {

    //creating state
    const [articles, setArticles] = useState([])

    //fetch of all articles
    useEffect(() => {
        axios
        .get('https://ncnews-lh66.onrender.com/api/articles')
        .then((response) => {
          return response.data.articles
        })
        .then((response) => {
          setArticles(response)
        })
      }, [])

    return (
        <>
        <ArticleList articles={articles} topics={topics}/>
        </>
    )

}