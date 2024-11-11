interface Article {
    id: string;
    title: string;
    subtitle: string;
    content: string;
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