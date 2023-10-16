```python
from django.db import models
from .User import User
from .Brand import Brand

class Affiliation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE)
    affiliation_status = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.user.email} - {self.brand.brand_name}"
```