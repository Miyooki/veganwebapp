from django.shortcuts import render

# Create your views here.

from django.shortcuts import render
from django.http import HttpResponse

def index(request):
    return render(request, "index.html")

def signup(request):
    return render(request, "signup.html", {'content':['This is the sign up page!','Sign up placeholder.']} )
