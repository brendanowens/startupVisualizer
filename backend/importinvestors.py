import json
from decimal import Decimal

from backend.models import Company, Investor, Investment

with open('csvjson1.json') as json_file:
    data = json.load(json_file)
    print(data)

for item in data:
    try:
        c = Company.objects.get(name=item['name'])
        i_list = []
        try:
            i_list.append(item['Investor1'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor2'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor3'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor4'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor5'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor6'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor7'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor8'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor9'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor10'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor11'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor12'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor13'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor14'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor15'].split(':'))
        except:
            pass
        try:
            i_list.append(item['Investor16'].split(':'))
        except:
            pass
        for investor in i_list:
            obj, created = Investor.objects.get_or_create(name=investor[0])
            Investment.objects.get_or_create(company=c, investor=obj, amount=Decimal(investor[1]))
    except:
        print('----ERROR----')
