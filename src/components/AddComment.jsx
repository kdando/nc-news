import { useState, useEffect, useContext } from "react"
import { CurrentUserContext } from "./CurrentUser";

export default function AddComment () {

    //grabbing context
    const { currentUser } = useContext(CurrentUserContext)

    //states to track changes and handle submission
    const [userCommentInput, setUserCommentInput] = useState("");
    const [userCommentFinal, setUserCommentFinal] = useState("");

    //handle changes to form (i.e. typing)
    const handleFormChange = (event) => {
        event.preventDefault();
        setUserCommentInput(event.target.value)
    }
    //handle submission
    const handleFormSubmission = (event) => {
        event.preventDefault();
        setUserCommentFinal(userCommentInput)
        
    }

    useEffect(() => {
        console.log(userCommentFinal);
    }, [userCommentFinal]);
    

    return (
        <>
        <div className="control block">
        <p>Add a comment. You are logged in as {currentUser.username}</p>
        <form onSubmit={handleFormSubmission}>
            <textarea className='textarea' placeholder='e.g. This article changed my life...' value={userCommentInput} onChange={handleFormChange} required></textarea>
            <button className="button is-primary" type='submit'>Submit</button>
        </form>
        </div>
        </>
    )
    
}