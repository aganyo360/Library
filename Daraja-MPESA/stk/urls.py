from django.contrib import admin
from django.urls import path,include
from  . import views

app_name = "stk"
urlpatterns = [
    path('pay/', views.pay,name="pay"),
    path('stkpush/', views.stkpush, name="stkpush")
]
