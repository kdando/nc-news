import ArticleList from './ArticleList'
import Loading from './Loading'

import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getArticles } from '../../utils/utils'


//STATES CREATED HERE:
//articles

//STATES NEEDED HERE:
//topics, filterQueries


export default function ArticleManager ({ isLoading, setIsLoading }) {

    //grabbing params and setting topic
    const { slug } = useParams();
    let topic = (slug !== "all") ? slug : undefined;

    //creating state
    const [articles, setArticles] = useState([])

    //fetch of all articles
    useEffect(() => {
      setIsLoading(true);
        getArticles(undefined, topic)
        .then((response) => {
          setArticles(response);
          setIsLoading(false);
        })
      }, [topic])

    return (
        <>
        {isLoading ? <Loading /> : <ArticleList articles={articles} />}
        </>
    )

}