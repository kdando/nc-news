import { useState } from "react"
import { getCommentsByArticle } from "../../utils/utils"

import CommentCard from './CommentCard';
import AddComment from "./AddComment";

export default function CommentList ({ article_id }) {

    const [viewingComments, setViewingComments] = useState([]);

    //setup context for current logged in user
    //have default user (but option to switch)
    //access user in AddComment to construct the request obj
    //pass down viewingcomments as comments like we did votes to be used in optimistic rendering (as the 'real' value vs the displayed one)

    getCommentsByArticle(article_id)
    .then((response) => {
        setViewingComments(response);
    })

    return (
        <>
        <AddComment />
        
        <ul className="container is-fluid">
            <strong>COMMENTS:</strong>
            {viewingComments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} />
            })}
        </ul>
        </>
    )

}