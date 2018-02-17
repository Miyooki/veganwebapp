from django.conf.urls import url, include
from django.views.generic import ListView, DetailView
from . import views
from webapp.models import Post

urlpatterns = [
    url(r'^$', views.index, name='index'),
	url(r'^signup/', views.signup, name="sign up"),
	url(r'^recipe-form/', ListView.as_view(
		queryset=Post.objects.all().order_by("-date")[:25],
		template_name="recipe.html")),
	)
]