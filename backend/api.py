from rest_framework import viewsets

from backend.models import Company
from backend.serializers import CompanySerializer


class CompanyViewSet(viewsets.ModelViewSet):
    serializer_class = CompanySerializer
    filter_fields = ('us_state',)

    def get_queryset(self):
        return Company.objects.all()
