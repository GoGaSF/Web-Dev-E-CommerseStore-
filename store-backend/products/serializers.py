from rest_framework import serializers
from .models import Product, Shoe, Clothing, WProduct, ProductSize

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
        
        
        
class ProductSizeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductSize
        fields = ['size']

class ProductSerializer(serializers.ModelSerializer):
    sizes = serializers.SerializerMethodField()
    
    class Meta:
        model = Product
        fields = ['id', 'name', 'brand', 'price', 'sizes', 'image', 'colors']
    
    def get_sizes(self, obj):
        
        return [size.size for size in obj.sizes.all()]
    
    def create(self, validated_data):
        sizes_data = self.context.get('sizes', [])
        product = Product.objects.create(**validated_data)
        
        
        for size in sizes_data:
            ProductSize.objects.create(product=product, size=size)
        
        return product
    
    def update(self, instance, validated_data):
        sizes_data = self.context.get('sizes', [])
        
        
        instance.name = validated_data.get('name', instance.name)
        instance.brand = validated_data.get('brand', instance.brand)
        instance.price = validated_data.get('price', instance.price)
        instance.colors = validated_data.get('colors', instance.colors)
        if 'image' in validated_data:
            instance.image = validated_data.get('image')
        instance.save()
        
        
        instance.sizes.all().delete()
        for size in sizes_data:
            ProductSize.objects.create(product=instance, size=size)
        
        return instance