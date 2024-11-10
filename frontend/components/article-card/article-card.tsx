import { Card, Image, Text, Group } from "@mantine/core";

import classes from "./article-card.module.css";

interface Article {
  title: string;
  subtitle: string;
  image: string;
  author: string;
  publish_date: string;
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Card withBorder radius="md" p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0}>
        <Image src={article.image} h={150} w={150} />
        <div className={classes.body}>
          <Text tt="uppercase" c="dimmed" fw={700} size="xs">
            technology
          </Text>
          <Text className={classes.title} mt="xs" mb="md">
            {article.title}
          </Text>
          <Group wrap="nowrap" gap="xs">
            <Group gap="xs" wrap="nowrap">
              <Text size="xs"> {article.author}</Text>
            </Group>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              {article.publish_date}
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
