import ArticleList from './ArticleList'
import Loading from './Loading'

import { useState, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import { getArticles } from '../../utils/utils'


//STATES CREATED HERE:
//articles

//STATES NEEDED HERE:
//topics, filterQueries


export default function ArticleManager ({ isLoading, setIsLoading }) {

    //grabbing params to set topic
    const { slug } = useParams();
    let topic = (slug !== "all") ? slug : undefined;

    //
    const [searchParams, setSearchParams] = useSearchParams();
    const sortByQuery = searchParams.get('sort_by');
    const orderQuery = searchParams.get('order');

    const setOrder = (direction) => {
      const newParams = new URLSearchParams(searchParams);
      newParams.set('order', direction);
      setSearchParams(newParams);
    };
   

    //creating state
    const [articles, setArticles] = useState([])

    //fetch of articles
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