```python
from django.db import models

class Brand(models.Model):
    brand_name = models.CharField(max_length=255)
    brand_type = models.CharField(max_length=255)

    def __str__(self):
        return self.brand_name
```