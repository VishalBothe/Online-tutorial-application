from rest_framework import routers
from django.urls import path, include

from . import views
router = routers.DefaultRouter()
router.register('', views.TopicViewSet)

urlpatterns = [
    path('topic-list/<int:subject_id>/<int:user_id>/<str:token>/',
         views.topic_list, name="topiList"),
    path('', include(router.urls)),
]
