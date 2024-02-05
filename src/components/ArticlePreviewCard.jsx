
//STATES NEEDED HERE:
//articles

export default function ArticlePreviewCard ({ article }) {

    const {
        title,
        author,
        topic,
        created_at,
        votes,
        comment_count,
        article_img_url
    } = article;

    let parsedDate = new Date(created_at)
    parsedDate = parsedDate.toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });


    return (
        <>
        <p>{title} by {author}</p>
        <p>on {parsedDate}</p>
        <img src={article_img_url} />
        <p>COMMENTS: {comment_count} VOTES: {votes}</p>
        </>
    )

}