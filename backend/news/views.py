from django.utils import timezone

from rest_framework.generics import ListAPIView, RetrieveAPIView
from news.models import Article, Category
from news.serializers import ArticleSerializer, CategorySerializer


class ArticleListAPIView(ListAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.filter(publish_date__lte=timezone.now())


class ArticleDetailAPIView(RetrieveAPIView):
    serializer_class = ArticleSerializer

    def get_queryset(self):
        return Article.objects.filter(publish_date__lte=timezone.now())

class CategoryListAPIView(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()