import { Article } from "../../../components/article/article";

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const article = await fetch(`http://localhost:8000/articles/${id}`).then(
    (res) => res.json()
  );

  return (
    <div className="container mx-auto px-4">
      <Article article={article} />
    </div>
  );
}
