from django.db import models

class Subjects(models.Model):
    name = models.CharField(max_length=80, default="Anonymous")
    professor = models.CharField(max_length=80, blank=True, null=True)
    semester = models.IntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    image = models.ImageField(upload_to="images/", blank=True, null=True)

    def __str__(self):
        return self.name
    