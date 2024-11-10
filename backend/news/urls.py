from django.urls import path
from .views import ArticleListAPIView, ArticleDetailAPIView, CategoryListAPIView

urlpatterns = [
    path("articles/", ArticleListAPIView.as_view(), name="article-list"),
    path("articles/<int:pk>/", ArticleDetailAPIView.as_view(), name="article-detail"),
    path("categories/", CategoryListAPIView.as_view(), name="category-list"),
]
