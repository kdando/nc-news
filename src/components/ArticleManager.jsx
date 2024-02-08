import ArticleList from './ArticleList'
import Loading from './Loading'

import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { getArticles } from '../../utils/utils'


//STATES NEEDED HERE:
//topics, filterQueries


export default function ArticleManager ({ isLoading, setIsLoading, searchParams, filterUpdated, setFilterUpdated }) {

    //grabbing params to set topic
    const { slug } = useParams();
    let topic = (slug !== "all") ? slug : undefined;

    searchParams.set('topic', topic)

    let sortByQuery = searchParams.get('sort_by');
    let orderQuery = searchParams.get('order');
    let topicQuery = searchParams.get('topic');

    console.log(orderQuery, "ORDER AT MNGR")

 


////////////////
    

    /////////////
   

    //creating state
    const [articles, setArticles] = useState([])

    //fetch of articles
    useEffect(() => {
      setIsLoading(true);
        getArticles(undefined, topicQuery, orderQuery)
        .then((response) => {
          setArticles(response);
          setIsLoading(false);
          setFilterUpdated(false);
        })
      }, [filterUpdated])

    return (
        <>
        {isLoading ? <Loading /> : <ArticleList articles={articles} />}
        </>
    )

}