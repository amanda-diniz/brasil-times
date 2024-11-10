import { Card, Image, Text, Group } from "@mantine/core";

import classes from "./article-card.module.css";

interface Article {
  title: string;
  subtitle: string;
  image: string;
  author: string;
  publish_date: string;
  category: string;
}

export function ArticleCard({ article }: { article: Article }) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleString()
  };

  return (
    <Card p={0} radius={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Image src={article.image} h={160} w={160} radius={"md"} />
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            {article.category}
          </Text>
          <Text className={classes.title} mt="xs" mb="sm">
            {article.title}
          </Text>
          <Text mb="md" size="sm">
            {article.subtitle}
          </Text>
        </div>
      </Group>
    </Card>
  );
}
