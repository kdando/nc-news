import ArticleList from './ArticleList'
import Loading from './Loading'

import { useState, useEffect } from 'react'

import { getArticles } from '../../utils/utils'


//STATES CREATED HERE:
//articles

//STATES NEEDED HERE:
//topics, filterQueries


export default function ArticleManager ({ topics, isLoading, setIsLoading }) {

    //creating state
    const [articles, setArticles] = useState([])

    //fetch of all articles
    useEffect(() => {
        getArticles()
        .then((response) => {
          setIsLoading(false);
          setArticles(response)
        })
      }, [])

    return (
        <>
        {isLoading ? <Loading /> : <ArticleList articles={articles} topics={topics}/>}
        </>
    )

}