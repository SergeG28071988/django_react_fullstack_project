from django.shortcuts import render
from .models import Order
from .serializers import OrderSerializer
from rest_framework import viewsets
# Create your views here.


class OrderView(viewsets.ModelViewSet):
    serializer_class = OrderSerializer 

    def get_queryset(self):
        return Order.objects.all() 
