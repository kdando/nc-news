import { useState } from "react"
import { getCommentsByArticle } from "../../utils/utils"

import CommentCard from './CommentCard';

export default function CommentList ({ article_id }) {

    const [viewingComments, setViewingComments] = useState([]);

    getCommentsByArticle(article_id)
    .then((response) => {
        setViewingComments(response);
    })

    return (
        <>
        <ul className="container is-fluid">
            <strong>COMMENTS:</strong>
            {viewingComments.map((comment) => {
                return <CommentCard key={comment.comment_id} comment={comment} />
            })}
        </ul>
        </>
    )

}