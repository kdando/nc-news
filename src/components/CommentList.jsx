//React and React Router parts
import { useEffect, useState } from "react"

//Util function
import { getCommentsByArticle } from "../../utils/utils"

//Components
import CommentCard from './CommentCard';
import AddComment from "./AddComment";
import Loading from './Loading'


export default function CommentList ({ article_id }) {

    //STATES
    const [viewingComments, setViewingComments] = useState([]);
    const [commentsChanged, setCommentsChanged] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    //API CALL
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
    }, [commentsChanged])

    
    return (
        <>
        <AddComment article_id={article_id} setCommentsChanged={setCommentsChanged}/>
            
        {error ? <p>{error}</p> : null}
            
        {isLoading ? (<Loading />) 
        : (<>
            {viewingComments !== undefined ? (
            <ul className="container is-fluid">
            <strong>COMMENTS:</strong>
            {viewingComments.map((comment) => (<CommentCard key={comment.comment_id} comment={comment} setCommentsChanged={setCommentsChanged}/>))}
            </ul>) 
            : (<p>No comments yet.</p>)
            }
            </>)
        }
        </>
    );

}