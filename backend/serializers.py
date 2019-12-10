from rest_framework import serializers

from backend.models import Company, Investment, Investor


class InvestmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Investment
        fields = '__all__'


class CompanySerializer(serializers.ModelSerializer):
    latitude = serializers.DecimalField(read_only=True, decimal_places=8, max_digits=12)
    longitude = serializers.DecimalField(read_only=True, decimal_places=8, max_digits=12)

    class Meta:
        model = Company
        exclude = ['country', 'acquirer_country']


class InvestorSerializer(serializers.ModelSerializer):
    investments_sum = serializers.DecimalField(read_only=True, decimal_places=2, max_digits=25)
    investments_count = serializers.IntegerField(read_only=True)

    class Meta:
        model = Investor
        fields = '__all__'
