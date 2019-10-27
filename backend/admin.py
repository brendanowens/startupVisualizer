from django.contrib import admin

from backend.models import Investor, Company, Investment

admin.site.register(Investor)
admin.site.register(Company)
admin.site.register(Investment)
