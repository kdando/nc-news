import { useState, useEffect, useContext } from "react"
import { CurrentUserContext } from "./CurrentUser";
import { postNewComment } from "../../utils/utils";

import Loading from './Loading';

export default function AddComment ({ article_id, setCommentSubmitted }) {

    //grabbing context
    const { currentUser } = useContext(CurrentUserContext)

    //states to track changes and handle submission
    const [userCommentInput, setUserCommentInput] = useState("");
    const [userCommentFinal, setUserCommentFinal] = useState({
        username: currentUser.username,
        body: undefined
    });

    //state for errors and loading
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    //handle changes to form
    const handleFormChange = (event) => {
        event.preventDefault();
        setUserCommentInput(event.target.value)
    }
    //handle submission
    const handleFormSubmission = (event) => {
        setCommentSubmitted(true);
        setIsLoading(true);
        event.preventDefault();
        const newComment = { ...userCommentFinal, body: userCommentInput}
        postNewComment(article_id, newComment)
        .then(() => {
            setError(null);
            setUserCommentInput("");
            setIsLoading(false);
            setCommentSubmitted(false);
        })
        .catch((error) => {
            setError("Comment not posted, please try again.")
            setIsLoading(false);
        })
        
    }
    

    return (
        <>
        <div className="control block">
        {error && <p>{error}</p>}
        {!error && (
            <>
            {isLoading ? <Loading /> : (
                <>
                <p>Add a comment as <strong>{currentUser.username}</strong></p>
                <form onSubmit={handleFormSubmission}>
                <textarea className='textarea' placeholder='e.g. This article changed my life...' value={userCommentInput} onChange={handleFormChange} required></textarea>
                <button className="button is-primary" type='submit'>Submit</button>
                </form>
                </>
                )
            }
            </>
            )}
        </div>
        </>
    );
    
    
}