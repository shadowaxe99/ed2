```python
from django.shortcuts import get_object_or_404
from django.views import View
from django.http import JsonResponse
from .models import User
import json

class PreferenceSettingView(View):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        user = get_object_or_404(User, id=data.get('user_id'))
        user.preferences = data.get('preferences')
        user.save()
        return JsonResponse({'message': 'Preferences updated successfully'}, status=200)

    def get(self, request, *args, **kwargs):
        user = get_object_or_404(User, id=request.GET.get('user_id'))
        return JsonResponse({'preferences': user.preferences}, status=200)
```