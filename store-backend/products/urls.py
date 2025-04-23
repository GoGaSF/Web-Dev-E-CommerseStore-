from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, ShoeViewSet, ClothingViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'shoes', ShoeViewSet, basename='shoe')
router.register(r'cloth', ClothingViewSet, basename='cloth')


urlpatterns = [
    path('', include(router.urls)),
    
]