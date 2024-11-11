from django.conf import settings
from django.utils import timezone
from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=250, verbose_name="Nome")
    color = models.CharField(max_length=250, verbose_name="Cor")

    class Meta:
        verbose_name = "Categoria"
        verbose_name_plural = "Categorias"

    def __str__(self):
        return self.name


class Article(models.Model):
    title = models.CharField(max_length=250, verbose_name="Título")
    subtitle = models.CharField(max_length=250, verbose_name="Subtítulo")
    image = models.ImageField(upload_to="images/", verbose_name="Imagem")
    content = models.TextField(verbose_name="Conteúdo")
    publish_date = models.DateTimeField(
        null=True, blank=True, verbose_name="Data de publicação"
    )
    create_date = models.DateTimeField(
        auto_now_add=True, verbose_name="Data de criação"
    )
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, verbose_name="Autor"
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.CASCADE,
        verbose_name="Categoria",
        null=True,
        related_name="articles",
    )

    class Meta:
        verbose_name = "Artigo"
        verbose_name_plural = "Artigos"

    def __str__(self):
        return self.title

