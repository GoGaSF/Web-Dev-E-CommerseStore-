from rest_framework import serializers
from .models import Product, Shoe, Clothing

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'name', 'brand', 'price', 'image', 'colors']
        
        
class ShoeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Shoe
        fields = ['id', 'name', 'size', 'price', 'image'] 
        

class ClothingSerializer(serializers.ModelSerializer):
    
    class Meta:
        model  = Clothing
        fields = ['id','name','brand','price','type','style','sizes','image','colors'] 