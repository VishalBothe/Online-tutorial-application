from django.db import models
from api.subjects.models import Subjects

class Topics(models.Model):
    title = models.CharField(max_length=260, default="A Topic")
    unit = models.IntegerField(default=0)
    link = models.CharField(max_length=500, default="")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    subject = models.ForeignKey(Subjects, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return self.title