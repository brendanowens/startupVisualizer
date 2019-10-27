from rest_framework import routers

from backend.api import CompanyViewSet

router = routers.DefaultRouter()
router.register('api/company', CompanyViewSet, 'company')

urlpatterns = [
]

urlpatterns += router.urls
