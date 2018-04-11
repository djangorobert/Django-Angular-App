# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from django.db import models


# Create your models here.
class Popular(models.Model):
    name = models.CharField(max_length=30)
    subs = models.IntegerField(default=0)

    def __unicode__(self):
        return self.name


