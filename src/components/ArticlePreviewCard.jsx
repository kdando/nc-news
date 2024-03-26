//React and React Router parts
import { Link } from 'react-router-dom';


export default function ArticlePreviewCard ({ article }) {

    const {
        article_id,
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
        <Link to={`/articles/${article_id}`}>
        <div className='card mb-4 mt-5' >
        <h2 className='card-header is-size-3 has-text-centered is-flex is-align-items-center is-justify-content-center is-wrap py-5'>{title}</h2>

            <div className="content is-flex is-justify-content-center card-image" >
                <img src={article_img_url} />
            </div>

            <div className='card-content is-size-5 has-text-centered is-flex is-align-items-center is-justify-content-center is-wrap mb-2'>
                posted by {author} on {parsedDate} in {topic}
            </div>

            <footer className='card-footer'>
                <span className='card-footer-item'>
                    {votes} votes
                </span>
                <span className='card-footer-item'>
                    {comment_count} comments
                </span>
            </footer>

        </div>
        </Link>
        </>
    )

}