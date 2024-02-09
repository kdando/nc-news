//React and React Router parts
import { useState, useContext } from "react";

//Context
import { CurrentUserContext } from "./CurrentUser";

//Util function
import { removeComment } from "../../utils/utils";

//Styling
import Icon from '@mdi/react';
import { mdiDeleteForever } from '@mdi/js';


export default function CommentCard ({ comment, setCommentsChanged }) {

    //STATES
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    
    //CONTEXT
    const { currentUser } = useContext(CurrentUserContext)

    const {
        comment_id,
        body,
        author,
        created_at,
        votes,
    } = comment;

    let parsedDate = new Date(created_at)
    parsedDate = parsedDate.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    //HANDLE DELETE COMMENT
    const handleDeleteClick = (event) => {
        event.preventDefault();
        setCommentsChanged(true);
        setIsLoading(true);
        removeComment(comment_id)
        .then(() => {
            setError(null);
            setIsLoading(false);
            setCommentsChanged(false);
        })
        .catch((error) => {
            setError("Comment not deleted, please try again.")
            setIsLoading(false);
        })
    }


    return (
        <>
        {error && <p>{error}</p>}
        
        <div className="card mt-2">
        <div className="card-content">
            <p className="card-content">{body}</p>
            <p className="subtitle is-size-6"><strong>{author}</strong></p>
        </div>
        <footer className="card-footer level-item">

            <span className="card-footer-item"><p className={`vote-count ${votes > 0 ? 'positive' : votes < 0 ? 'negative' : ''} level-item`}>{votes}</p></span>

            {currentUser.username === author ? 
            <button className="card-footer-item button is-danger is-light is-responsive" onClick={handleDeleteClick}><Icon path={mdiDeleteForever} size={1} /></button> 
            : null}
            
        </footer>
        </div>
        </>
    )

}