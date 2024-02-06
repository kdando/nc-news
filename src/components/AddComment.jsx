import { useState, useEffect } from "react"

export default function AddComment () {

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
        setUserCommentFinal(userCommentInput);
        console.log(userCommentFinal)
    }
    
    let isFormReady = userCommentInput.trim() !== ''
    
    useEffect(() => {
        isFormReady = userCommentInput.trim() !== '';
    }, [userCommentInput]);

    return (
        <>
        <div className="control block">
        <p>Add a comment. You are logged in as username</p>
        <form>
            <textarea className='textarea' placeholder='e.g. This article changed my life...' value={userCommentInput} onChange={handleFormChange}></textarea>
            <button className="button is-primary" type='submit' onClick={handleFormSubmission} disabled={!isFormReady}>Submit</button>
        </form>
        </div>
        </>
    )
    
}