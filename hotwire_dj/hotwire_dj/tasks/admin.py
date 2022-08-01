from django.contrib import admin
from .models import *


# Register your models here.

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'due_date')
    list_display_links = ('id', 'title',)
    search_fields = ('id', 'title', 'due_date')
    list_per_page = 25
