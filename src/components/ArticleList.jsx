import ArticlePreviewCard from './ArticlePreviewCard'

//STATES NEEDED HERE:
//articles, topics, filterQueries

export default function ArticleList ({ articles, topics }) {

    

    return (
        <>
        <h2>ARTICLES:</h2>
        <ul>
            {articles.map((article) => {
                return <ArticlePreviewCard key={article.article_id} article={article} />
            })}
        </ul>
        </>
    )

}