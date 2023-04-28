from django.urls import path, include
from appointments import views

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<

urlpatterns = [
    path('', views.user_appointments),
    # path('all/', views.get_all_appointments),
]
