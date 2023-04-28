from django.db import models
from authentication.models import User
import datetime

# Create your models here.

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class Appointment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    start = models.DateField()
    end = models.DateField()
