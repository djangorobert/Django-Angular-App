# Django-Angular-App
An Application using Django and Django Rest Framework for an API and then using Angular TypeScript to consume the data
For the Backend Use Django and Django Rest Framework

virtualenv 'yourvirtualenvname goes here'
cd 'yourvirtualname goes here'
#USE PIP to Install Following Packages
Django==1.11.12
django-cors-headers==1.1.0
django-cors-middleware==1.3.1
djangorestframework==3.8.2
pytz==2018.3

#Commands in Command Prompt 
django-admin startproject 'yourdjangoprojectnamehere'
cd 'yourdjangoprojectnamehere'
python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser

#Pick a Name that you remember
#Enter a email you can remember

#Next we will build the model 
#Run this command
python manage.py startapp 'pickaapplicationname'
cd 'pickapplicationanme'

Remember when you build a Model sit and think of what your trying to accomplish or what type of data you want to collect
#Heres the Example MODEL:

from __future__ import unicode_literals
from django.db import models


# Create your models here.
class Popular(models.Model):
    name = models.CharField(max_length=30)
    subs = models.IntegerField(default=0)

#thats it for django the rest is used in Django REST FRAMEWORK

#This is the VIEW we are using Django Rest
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
    
    
#Wire up the viewset to the URLS
from django.conf.urls import url
from django.contrib import admin
from mostpop import views
#URLS for Django REST API
from rest_framework import routers, viewsets
from django.conf.urls import url, include
from mostpop.models import Popular

from mostpop.serializers import PopularSerializer



class PopularViewSet(viewsets.ModelViewSet):
    """API endpoint that allows users to be viewed
    or edited."""
    queryset = Popular.objects.all()
    serializer_class = PopularSerializer


router = routers.DefaultRouter()
router.register(r'popular', PopularViewSet)

urlpatterns = [
    url(r'home/', views.home, name='home'),
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    url(r'^admin/', admin.site.urls),
]

#Launch the Server with this command
python manage.py runserver


#Steps for Angular Typescript to get started 
#Make sure you have NODEJS downloaded to your pc
# As well as NPM

#Once you have those downloaded to your pc
#Run this command
npm install -g @angular/cli

ng new 'putyourangularprojectnamehere'
cd 'putyourangularprojectnamehere'



#Next
create A Service , A Service is like Data in this case we are using Django Rest Framework to get JSON data
Next you want to create a Component in Angular its like Djangos Views but for the front end

ng serve --open

#ENJOY
