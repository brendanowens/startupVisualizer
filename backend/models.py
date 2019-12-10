from django.contrib.gis.db.models import PointField
from django.db.models import Sum
from django.db import models
from django_countries.fields import CountryField
from localflavor.us.models import USStateField


class Investor(models.Model):
    name = models.CharField(max_length=200)

    @property
    def investments_sum(self):
        return self.investment_set.aggregate(Sum('amount'))['amount__sum']

    @property
    def investments_count(self):
        return self.investment_set.count()

    def __str__(self):
        return self.name


class Company(models.Model):
    name = models.CharField(max_length=500)
    category = models.CharField(max_length=100)
    funding_total = models.DecimalField(max_digits=20, decimal_places=9)
    status = models.CharField(max_length=20)
    country = CountryField()
    us_state = USStateField()
    us_city = models.CharField(max_length=200)
    funding_rounds = models.IntegerField()
    number_of_investors = models.IntegerField()
    acquirer = models.CharField(max_length=200, null=True, blank=True)
    acquirer_category = models.CharField(max_length=100, null=True, blank=True)
    acquirer_country = CountryField(null=True, blank=True)
    acquirer_us_state = USStateField(null=True, blank=True)
    acquirer_us_city = models.CharField(max_length=200, null=True, blank=True)
    acquired_price = models.DecimalField(max_digits=25, decimal_places=5, null=True, blank=True)
    acquired_currency = models.CharField(max_length=3, null=True, blank=True)
    county = models.CharField(max_length=100)
    founded_at = models.IntegerField()
    coordinates = PointField(null=True, blank=True)

    @property
    def latitude(self):
        return self.coordinates.coords[1]

    @property
    def longitude(self):
        return self.coordinates.coords[0]

    def __str__(self):
        return self.name


class Investment(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    investor = models.ForeignKey(Investor, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=25, decimal_places=5)

    def __str__(self):
        return str(self.company)
