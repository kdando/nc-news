//React and React Router parts
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

//Util function
import { getArticles } from '../../utils/utils';

//Components
import ArticleList from './ArticleList';
import Loading from './Loading';
import Error from './Error';


export default function ArticleManager ({ isLoading, setIsLoading, searchParams, filterUpdated, setFilterUpdated }) {

    //STATES
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    //PARAMS
    const { slug } = useParams();
    let topic = (slug !== "all") ? slug : undefined;
    searchParams.set('topic', topic);
    let sortByQuery = searchParams.get('sorted_by');
    let orderQuery = searchParams.get('order');
    let topicQuery = searchParams.get('topic');

    //API CALL
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
