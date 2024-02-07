import { useEffect, useState } from "react"
import { getCommentsByArticle } from "../../utils/utils"

import Loading from './Loading'

import CommentCard from './CommentCard';
import AddComment from "./AddComment";

export default function CommentList ({ article_id }) {

    const [viewingComments, setViewingComments] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getCommentsByArticle(article_id)
        .then((response) => {
            setViewingComments(response);
            setIsLoading(false);
        })
        .catch((error) => {
            setError(error);
            setIsLoading(false);
        })
    }, [])
    
    return (
        <>
        <AddComment article_id={article_id} />
            
        {error && <p>{error}</p>}
            
        {isLoading ? (<Loading />) 
        : (<>
            {viewingComments !== undefined ? (
            <ul className="container is-fluid">
            <strong>COMMENTS:</strong>
            {viewingComments.map((comment) => (<CommentCard key={comment.comment_id} comment={comment} />))}
            </ul>) 
            : (<p>No comments yet.</p>)
            }
            </>)
        }
        </>
    );

}