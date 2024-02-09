import Error from './Error';
import ArticleList from './ArticleList';
import Loading from './Loading';
import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { getArticles } from '../../utils/utils';

export default function ArticleManager ({ isLoading, setIsLoading, searchParams, filterUpdated, setFilterUpdated }) {
    
    const { slug } = useParams();
    let topic = (slug !== "all") ? slug : undefined;
    searchParams.set('topic', topic);

    const [error, setError] = useState(null);

    // Variables for query parameters
    let sortByQuery = searchParams.get('sort_by');
    let orderQuery = searchParams.get('order');
    let topicQuery = searchParams.get('topic');

    // State for storing articles
    const [articles, setArticles] = useState([]);

    useEffect(() => {
            setIsLoading(true);
            getArticles(undefined, topicQuery, sortByQuery, orderQuery)
                .then((response) => {
                    setArticles(response);
                    setIsLoading(false);
                    setFilterUpdated(false);
                })
                .catch((error) => {
                    setIsLoading(false);
                    setError({ status: error.response.status, msg: error.response.data.msg });
                });
    }, [topicQuery, sortByQuery, orderQuery, setIsLoading, setFilterUpdated]);

    if (error) {
        return <Error error={error}/>;
    }

    return (
        <>
            {isLoading ? <Loading /> : <ArticleList articles={articles} />}
        </>
    );
}
