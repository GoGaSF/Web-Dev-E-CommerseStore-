from django.db import models


class Brand(models.Model):
    name = models.CharField(max_length=100, unique=True, db_index=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    brand = models.ForeignKey(Brand, related_name='products', on_delete=models.CASCADE)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    image = models.CharField(max_length=255, blank=True, null=True)
    colors = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.brand.name} - {self.name}"
    
    
class Shoe(models.Model):
    
    name = models.CharField(max_length=255)  
    size = models.IntegerField(help_text="European size, 42") 
    price = models.IntegerField()
    image = models.URLField(max_length=500, 
                            help_text="URL to product image")  

    def __str__(self):
        return f"{self.name} (Size {self.size})"
    

class Clothing(models.Model):
    
    name    = models.CharField(max_length=255, help_text="Product name")               
    brand   = models.CharField(max_length=100, help_text="Brand name")                 
    price   = models.IntegerField(help_text="Price in smallest currency unit")         
    type    = models.CharField(max_length=10, choices=[('top','Top'),('bottom','Bottom')], help_text="Top or bottom")  
    style   = models.CharField(max_length=10, choices=[('classic','Classic'),('casual','Casual')], help_text="Style")  
    sizes   = models.ArrayField(models.CharField(max_length=5), help_text="Available sizes")  
    image   = models.URLField(max_length=500, help_text="URL to product image")        
    colors  = models.IntegerField(default=1, help_text="Number of color variants")    

    def __str__(self):
        return f"{self.brand} – {self.name}"