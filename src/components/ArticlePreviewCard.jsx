
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

    return (
        <>
        <p>{title} by {author}</p>
        </>
    )

}