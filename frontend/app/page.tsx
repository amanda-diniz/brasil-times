import { Title } from "@mantine/core";
import { ArticleCard } from "../components/article-card/article-card";
import { CardsCarousel } from "../components/article-carousel/article-carousel";
import { ColumnCard } from "../components/column-card/column-card";

export default async function HomePage() {
  const articles = await fetch("http://localhost:8000/articles").then((res) =>
    res.json()
  );

  const categories = await fetch("http://localhost:8000/categories").then(
    (res) => res.json()
  );

  const columns = articles.reduce((acc: Article[], article: Article) => {
    if (!acc.some((a) => a.author === article.author)) {
      acc.push(article);
    }
    return acc;
  }, []);

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-3 gap-8 py-8">
        <div className="col-span-3 md:col-span-2">
          <CardsCarousel articles={articles} />
        </div>
        <div className="flex flex-col gap-4">
          <Title order={2}>Colunistas</Title>
          <div className="flex flex-col gap-4">
            {columns.map((article: Article) => (
              <ColumnCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Title order={2}>Editorias</Title>
        <div className="flex flex-col gap-8 md:flex-row">
          {categories.map((category: Category) => (
            <div
              key={`category-${category.id}`}
              className="flex flex-col gap-4 md:w-1/3"
            >
              <Title order={3} c={category.color}>
                {category.name}
              </Title>
              {category.articles.map((article: Article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
