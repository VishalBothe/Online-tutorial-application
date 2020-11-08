from rest_framework import routers
from django.urls import path, include

from . import views
router = routers.DefaultRouter()
router.register('', views.SubjectViewSet)

urlpatterns = [
    path('subject-list/<int:semester>/<int:user_id>/', views.subject_list, name="subjectList"),
    path('', include(router.urls)),
]
