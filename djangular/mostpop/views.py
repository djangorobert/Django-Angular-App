# -*- coding: utf-8 -*-
from __future__ import unicode_literals


from django.shortcuts import render
#For Django REST FRAMEWORK
from rest_framework import viewsets
from .serializers import PopularSerializer
from .models import Popular

# Create your views here.
def home(request):
    templates = 'Popular/home.html'
    return render(request, templates)

#DRF API VIEWS
class PopularViewSet(viewsets.ModelViewSet):
    """API endpoint that allows users to be viewed
    or edited."""
    queryset = Popular.objects.all()
    serializer_class = PopularSerializer
