import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getArticles } from '../../utils/utils'

import Loading from './Loading'
import CommentList from './CommentList';
import AddVote from './AddVote';

export default function ArticleFullCard ({ isLoading, setIsLoading }) {

    const [viewingArticle, setViewingArticle] = useState({});

    const { article_id } = useParams();

    useEffect(() => {
        setIsLoading(true)
        getArticles(article_id)
        .then((response) => {
            setViewingArticle(response)
            setIsLoading(false)
        })
    }, [])

    const {
        body,
        title,
        author,
        topic,
        created_at,
        votes,
        comment_count,
        article_img_url
    } = viewingArticle;

    let parsedDate = new Date(created_at)
    parsedDate = parsedDate.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

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