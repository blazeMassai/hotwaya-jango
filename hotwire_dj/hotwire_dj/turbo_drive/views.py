from django.contrib import messages
from django.shortcuts import render, redirect
from hotwire_dj.tasks.forms import TaskForm

from hotwire_dj.tasks.models import Task


def create_view(request):
    import time
    time.sleep(1)
    if request.method == 'POST':
        form = TaskForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Task created successfully')
            return redirect('turbo-drive:task-list')
    else:
        form = TaskForm()
    return render(request, 'turbo_drive/create.html', {'form': form})

def list_view(request):
    object_list=Task.objects.all().order_by('-due_date')
    context = {
        "object_list": object_list,
    }

    return render(request, 'turbo_drive/list.html', context)