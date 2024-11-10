import { Title } from "@mantine/core";
import { ArticleCard } from "../components/article-card/article-card";

interface Article {
  title: string;
  subtitle: string;
  image: string;
  author: string;
  publish_date: string;
}

export default async function HomePage() {
  const articles = await fetch("http://localhost:8000/articles").then((res) =>
    res.json()
  );

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-4">
        <Title order={2}>Editorias</Title>
        <div className="flex gap-8">
          <div className="flex flex-col gap-4 w-1/3">
            <Title order={3} c="blue">Tecnologia</Title>
            {articles.map((article: Article) => (
              <ArticleCard article={article} />
            ))}
          </div>
          <div className="flex flex-col gap-4 w-1/3">
            <Title order={3} c="grape">Arte</Title>
            {articles.map((article: Article) => (
              <ArticleCard article={article} />
            ))}
          </div>
          <div className="flex flex-col gap-4 w-1/3">
            <Title order={3} c="orange">Poder</Title>
            {articles.map((article: Article) => (
              <ArticleCard article={article} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
