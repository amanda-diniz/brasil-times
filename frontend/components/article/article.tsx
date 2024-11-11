import { Image, Text, Title } from "@mantine/core";

export function Article({ article }: { article: Article }) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleString()
  };

  return (
    <article className="max-w-3xl mx-auto">
      <Title order={1}>{article.title}</Title>
      <Title order={2} size="h3" mt={2} c="dimmed" fw="normal">
        {article.subtitle}
      </Title>
      <div className="py-8">
        <Text fw={700}>{article.author}</Text>
        <Text c="dimmed" size="sm">{formatDate(article.publish_date)}</Text>
      </div>
      <Image mb={48} src={article.image} radius={"sm"} />
      <div className="space-y-4">
        {article.content.split(/\r?\n|\r|\n/g).map((paragraph) => (
          <Text>{paragraph}</Text>
        ))}
      </div>
    </article>
  );
}
