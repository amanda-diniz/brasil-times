"use client";
import { Carousel } from "@mantine/carousel";
import { Paper, Text, Title, Button, Stack, rem } from "@mantine/core";
import classes from "./article-carousel.module.css";

interface Article {
  title: string;
  subtitle: string;
  image: string;
  author: string;
  publish_date: string;
  category: string;
}

function Card({ image, title, category }: Article) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})`, backgroundPosition: "top" }}
      className={classes.card}
    >
      <Paper radius="md" bg="dark" p={16}>
        <Stack gap={0}>
          <Text className={classes.category} size="xs">
            {category}
          </Text>
          <Title order={3} className={classes.title}>
            {title}
          </Title>
        </Stack>
      </Paper>
      <Button variant="white" color="dark">
        Read article
      </Button>
    </Paper>
  );
}

export function CardsCarousel({ articles }: { articles: Article[] }) {
  const slides = articles.map((item: Article) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: "100%" }}
      slideGap={{ base: rem(2), sm: "xl" }}
      align="start"
      slidesToScroll={1}
    >
      {slides}
    </Carousel>
  );
}
