import { Title } from "@mantine/core";
import { ArticleCard } from "../components/article-card/article-card";
import { CardsCarousel } from "../components/article-carousel/article-carousel";

interface Article {
  title: string;
  subtitle: string;
  image: string;
  author: string;
  publish_date: string;
  category: string;
}

interface Category {
  id: string;
  name: string;
  color: string;
  articles: Article[];
}

export default async function HomePage() {
  const articles = await fetch("http://localhost:8000/articles").then(
    (res) => res.json()
  );

  const categories = await fetch("http://localhost:8000/categories").then(
    (res) => res.json()
  );

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-3 gap-4 py-8">
        <div className="col-span-2">
          <CardsCarousel articles={articles} />
        </div>
        <div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Title order={2}>Editorias</Title>
        <div className="flex gap-8">
          {categories.map((category: Category) => (
            <div key={category.id} className="flex flex-col gap-4 w-1/3">
              <Title order={3} c={category.color}>
                {category.name}
              </Title>
              {category.articles.map((article: Article) => (
                <ArticleCard article={article} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
