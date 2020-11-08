from rest_framework import viewsets
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Subjects
from .serializer import SubjectSerializer, obj_serializer

from ..views import is_signed_in
import json

@csrf_exempt
def subject_list(request, semester, user_id):
    if not is_signed_in(user_id):
        return JsonResponse({"error":"Sign in to Continue ..."})
    queryset = Subjects.objects.all().filter(semester=semester).values('id','name','professor','image','updated_at')
    return JsonResponse(list(queryset), safe=False)

class SubjectViewSet(viewsets.ModelViewSet):
    queryset = Subjects.objects.all().order_by('id')
    serializer_class = SubjectSerializer
