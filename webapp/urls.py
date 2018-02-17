from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
	url(r'^index/', views.index, name='home'),
	url(r'^signup/', views.signup, name="sign up"),
	url(r'^recipeform/', views.submit, name="submit recipe"),
]