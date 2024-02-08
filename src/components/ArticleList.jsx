import ArticlePreviewCard from './ArticlePreviewCard'

export default function ArticleList ({ articles }) {

    return (
        <>
        <ul>
            {articles.map((article) => {
                return <ArticlePreviewCard key={article.article_id} article={article} />
            })}
        </ul>
        </>
    )

}