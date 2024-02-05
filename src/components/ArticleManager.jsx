import ArticleList from './ArticleList'

import axios from 'axios';
import { useState, useEffect } from 'react'

import { getArticles } from '../../utils/utils'


//STATES CREATED HERE:
//articles

//STATES NEEDED HERE:
//topics, filterQueries


export default function ArticleManager ({ topics }) {

    //creating state
    const [articles, setArticles] = useState([])

    //fetch of all articles
    useEffect(() => {
        getArticles()
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