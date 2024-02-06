

export default function CommentCard ({ comment }) {

    const {
        comment_id,
        body,
        author,
        created_at,
        votes,
    } = comment;

    return (
        <>
        <div className="box">
        <p>{body}</p>
        <strong>{author}</strong>
        <p>{votes}</p>
        </div>
        </>
    )

}