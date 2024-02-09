//React and React Router parts
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Util function
import { getArticles } from '../../utils/utils'

//Components
import Loading from './Loading'
import CommentList from './CommentList';
import AddVote from './AddVote';
import Error from './Error'


export default function ArticleFullCard ({ isLoading, setIsLoading }) {

    //STATES
    const [viewingArticle, setViewingArticle] = useState({});
    const [error, setError] = useState(null);

    //PARAMS
    const { article_id } = useParams();

    //API CALL
    useEffect(() => {
            setIsLoading(true)
            getArticles(article_id)
            .then((response) => {
                setViewingArticle(response)
                setIsLoading(false)
                setError(null);
            })
            .catch((error) => {
                setIsLoading(false);
                setError({ status: error.response.status, msg: error.response.data.msg })
            });
    }, [article_id])

    const {
        body,
        title,
        author,
        topic,
        created_at,
        votes,
        article_img_url
    } = viewingArticle;

    let parsedDate = new Date(created_at)
    parsedDate = parsedDate.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    
    if (error) {
        return <Error error={error} />;
    }

    return (<>
        {isLoading ? 
            <Loading /> : 
            <>
            <article className="box">
            <h2>{title}</h2>
            <img src={article_img_url} alt={title} />
            <h3>
            by {author}, posted {parsedDate} in {topic}
            </h3>
            <p>{body}</p>
            </article>
            
            <AddVote article_id={article_id} votes={votes} />
            
            <CommentList article_id={article_id} />
            </>
        }
        </>)

}