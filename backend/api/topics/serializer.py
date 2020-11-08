from rest_framework import serializers
from .models import Topics

class TopicSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Topics
        fields = (
            'title',
            'unit',
            'link',
            'subject'
        )