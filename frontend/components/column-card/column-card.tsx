import { Card, Image, Text } from "@mantine/core";

import classes from "./column-card.module.css";
import Link from "next/link";

export function ColumnCard({ article }: { article: Article }) {
  return (
    <Link href={`/article/${article.id}`}>
      <Card p={0} radius={0} className={classes.card}>
        <div className="flex flex-col md:flex-row gap-4">
          <Image src={article.image} h={100} radius={"md"} className="md:aspect-square"/>
          <div>
            <Text tt="uppercase" c="purple" fw={"bold"}>
              {article.author}
            </Text>
            <Text className={classes.title} mb="sm">
              {article.title}
            </Text>
          </div>
        </div>
      </Card>
    </Link>
  );
}
