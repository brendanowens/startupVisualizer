from rest_framework import viewsets

from backend.models import Company, Investment, Investor
from backend.serializers import CompanySerializer, InvestmentSerializer, InvestorSerializer


class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer

    def get_queryset(self):
        return Company.objects.all()


class InvestmentViewSet(viewsets.ModelViewSet):
    serializer_class = InvestmentSerializer

    def get_queryset(self):
        return Investment.objects.all()


class InvestorViewSet(viewsets.ModelViewSet):
    serializer_class = InvestorSerializer

    def get_queryset(self):
        return Investor.objects.all()
