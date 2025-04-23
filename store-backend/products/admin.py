from django.contrib import admin
from .models import Product

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'brand', 'price', 'colors')
    list_filter = ('brand',)
    search_fields = ('name', 'brand')