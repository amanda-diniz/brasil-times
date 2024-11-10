"use client";
import { Carousel } from "@mantine/carousel";
import { Paper, Badge, Stack, rem } from "@mantine/core";
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
      <Badge color="black">{category}</Badge>
      <div className="bg-black bg-opacity-30 text-white text-3xl font-extrabold w-1/2 p-2 leading-tight rounded-md">
        {title}
      </div>
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
