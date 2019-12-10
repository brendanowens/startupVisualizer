from .models import Company

for company in Company.objects.all():
    if company.acquirer == '-':
        company.acquirer = None
        company.acquired_price = None
    if company.acquirer_category == '-':
        company.acquirer_category = None
    if company.acquired_currency == '-':
        company.acquired_currency = None
    company.save()
