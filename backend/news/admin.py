from django.contrib import admin
from news.models import Article, Category

@admin.register(Article)
class ArticleAdmin(admin.ModelAdmin):
    date_hierarchy = "publish_date"
    list_display = ["title", "author", "create_date", "publish_date"]
    
admin.site.register(Category)    
