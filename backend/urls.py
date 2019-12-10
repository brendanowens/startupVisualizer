from rest_framework import routers

from backend.api import CompanyViewSet, InvestmentViewSet, InvestorViewSet

router = routers.DefaultRouter()
router.register('api/company', CompanyViewSet, 'company')
router.register('api/investment', InvestmentViewSet, 'investment')
router.register('api/investor', InvestorViewSet, 'investor')

urlpatterns = [
]

urlpatterns += router.urls
