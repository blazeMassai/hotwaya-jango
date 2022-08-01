from django import forms
from .models import Task


class TaskForm(forms.ModelForm):
    title = forms.TextInput(attrs={'class':'border rounded'})

    due_date = forms.DateField(
        widget=forms.TextInput(
            attrs={'type': 'date'}
        )
    )

    class Meta:
        model = Task
        fields = ("title", "due_date")
