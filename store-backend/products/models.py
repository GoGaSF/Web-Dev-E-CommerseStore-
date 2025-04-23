from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=200)
    brand = models.CharField(max_length=100)
    price = models.IntegerField()
    image = models.ImageField(upload_to='products/')
    colors = models.IntegerField(default=1)
    category = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name