from rest_framework import serializers
from .models import Subjects
from django.core.serializers import serialize


def obj_serializer(data_format, queryset_obj):
    image = serializers.ImageField(max_length=None, allow_empty_file=True, allow_null=True, required=False)
    serialized_data = serialize(data_format, queryset_obj)
    return serialized_data

class SubjectSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Subjects
        fields = (
            'id',
            'name',
            'professor',
            'semester',
            'image'
        )
