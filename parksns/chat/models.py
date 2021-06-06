from django.db import models

MAX_LEN = int(1e10)

class ChatRoom(models.Model):
    p_idx = models.IntegerField(primary_key=True)
    message = models.CharField(max_length=MAX_LEN)

    def __str__(self):
        return f'{self.p_idx}: {self.message}'