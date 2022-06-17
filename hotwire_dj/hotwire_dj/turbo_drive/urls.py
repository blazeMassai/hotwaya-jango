from django.urls import path
from .views import create_view

app_name = 'turbo-drive'

urlpatterns = [
    path('create/', create_view, name='task-create'),
]