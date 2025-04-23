from rest_framework import generics
from .models import Product, Shoe, Clothing, Brand
from .serializers import ProductSerializer, ShoeSerializer, ClothingSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status



class ProductViewSet(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    
class ShoeViewSet(generics.ListAPIView):
    queryset = Shoe.objects.all().order_by('id')
    serializer_class = ShoeSerializer
    
class ClothingViewSet(generics.ListAPIView):
    queryset         = Clothing.objects.all().order_by('id')
    serializer_class = ClothingSerializer
    
    
@api_view(['GET'])
def product_list(request):
    """
    List all products, with filtering and sorting capabilities,
    using the Brand ForeignKey relationship.
    """
    
    products = Product.objects.select_related('brand').all()

    # --- Filtering ---
    
    selected_brands_str = request.query_params.get('brands', None)
    if selected_brands_str:
        selected_brands = [brand.strip() for brand in selected_brands_str.split(',')]
        if selected_brands:
            
            products = products.filter(brand__name__in=selected_brands)

    # Filter by price range
    min_price_str = request.query_params.get('min_price', None)
    max_price_str = request.query_params.get('max_price', None)

    try:
        if min_price_str is not None:
            min_price = float(min_price_str)
            products = products.filter(price__gte=min_price)

        if max_price_str is not None:
            max_price = float(max_price_str)
            products = products.filter(price__lte=max_price)
    except ValueError:
        return Response(
            {"error": "Invalid price parameter. Please provide numeric values."},
            status=status.HTTP_400_BAD_REQUEST
        )

    # --- Sorting ---
    sort_by = request.query_params.get('sort_by', 'featured')

    if sort_by == 'price-asc':
        products = products.order_by('price')
    elif sort_by == 'price-desc':
        products = products.order_by('-price')
    elif sort_by == 'name-asc':
        products = products.order_by('name')
    elif sort_by == 'brand-asc':
        products = products.order_by('brand__name')
    elif sort_by == 'featured':
        products = products.order_by('id')
    
    
    serializer = ProductSerializer(products, many=True)


    return Response(serializer.data)

@api_view(['GET'])
def brand_list(request):
    
    brands = Brand.objects.values_list('name', flat=True).order_by('name')
    return Response(list(brands))