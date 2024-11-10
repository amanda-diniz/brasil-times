from rest_framework import serializers
from news.models import Article

class ArticleSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)
    author = serializers.CharField(source="author.username")
    category = serializers.CharField(source="category.name")

    class Meta:
        model = Article
        fields = [
            "id",
            "title",
            "subtitle",
            "image",
            "content",
            "author",
            "publish_date",
            "create_date",
            "category",
        ]
