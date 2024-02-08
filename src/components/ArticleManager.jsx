import ArticleList from './ArticleList'
import Loading from './Loading'

import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { getArticles } from '../../utils/utils'




export default function ArticleManager ({ isLoading, setIsLoading, searchParams, filterUpdated, setFilterUpdated }) {

    //
    const { slug } = useParams();
    let topic = (slug !== "all") ? slug : undefined;

    searchParams.set('topic', topic)

    let sortByQuery = searchParams.get('sort_by');
    let orderQuery = searchParams.get('order');
    let topicQuery = searchParams.get('topic');
 


////////////////
    

    /////////////
   

    //creating state
    const [articles, setArticles] = useState([])

    //fetch of articles
    useEffect(() => {
      setIsLoading(true);
        getArticles(undefined, topicQuery, sortByQuery, orderQuery)
        .then((response) => {
          setArticles(response);
          setIsLoading(false);
          setFilterUpdated(false);
        })
      }, [topicQuery, filterUpdated])

    return (
        <>
        {isLoading ? <Loading /> : <ArticleList articles={articles} />}
        </>
    )

}