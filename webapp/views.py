from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, "index.html")

def signup(request):

def submit(request):
	return render(request, "recipeform.html")