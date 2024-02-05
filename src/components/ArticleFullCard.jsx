import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ArticleFullCard () {

    const [viewingArticle, setViewingArticle] = useState({});

    const { article_id } = useParams();

    useEffect(() => {
        axios
        .get(`https://ncnews-lh66.onrender.com/api/articles/${article_id}`)
        .then((response) => {
            setViewingArticle(response.data.article)
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

    return (
        <>
        <h2>{title}</h2>
        <img src={article_img_url} />
        <h3>by {author}, posted {parsedDate} in {topic}</h3>
        <p>{body}</p>
        
        </>
    )

}