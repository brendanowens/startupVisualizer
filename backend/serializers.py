from rest_framework import serializers

from backend.models import Company, Investment, Investor


class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        exclude = ['country', 'acquirer_country']  # TODO serialize country
