from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StadiumViewSet, SectionViewSet, RowViewSet, SeatViewSet

router = DefaultRouter()
router.register(r'stadiums', StadiumViewSet)
router.register(r'sections', SectionViewSet)
router.register(r'rows', RowViewSet)
router.register(r'seats', SeatViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
