import { Card, Image, Text, Group } from "@mantine/core";

import classes from "./article-card.module.css";
import Link from "next/link";

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.id}`}>
      <Card p={0} radius={0} className={classes.card}>
        <div className="flex flex-col md:flex-row gap-4">
          <Image src={article.image} h={160} radius={"md"} className="md:aspect-square"/>
          <div>
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
        </div>
      </Card>
    </Link>
  );
}
