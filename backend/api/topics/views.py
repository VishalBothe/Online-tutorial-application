from rest_framework import viewsets
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Topics
from .serializer import TopicSerializer

from ..views import is_signed_in, validate_user_session

@csrf_exempt
def topic_list(request, subject_id, user_id, token):
    if not validate_user_session(user_id, token):
        return JsonResponse({"error":"Login to continue..!"})
    queryset = Topics.objects.all().filter(subject=subject_id).values(
        'title',
        'unit',
        'link',
        'subject'
    )
    return JsonResponse(list(queryset), safe=False)

class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topics.objects.all().order_by('id')
    serializer_class = TopicSerializer
