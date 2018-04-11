from .models import Popular

from rest_framework import serializers



class PopularSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Popular
        fields = ('url', 'name', 'subs')