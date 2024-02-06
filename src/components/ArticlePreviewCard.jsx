import { Link } from 'react-router-dom';

//STATES NEEDED HERE:
//articles

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
        <Link to={`/${article_id}`}>
        <div className='card mb-4 mt-4'>
        <p className='card-header'>{title}</p>
        <div className='card-image'>
            <img src={article_img_url} />
        </div>
        <div className='card-content'>
            posted by {author} on {parsedDate}
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