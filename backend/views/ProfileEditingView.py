```python
from django.shortcuts import get_object_or_404
from django.views import View
from django.http import JsonResponse
from .models import User
import json

class ProfileEditingView(View):
    def post(self, request, *args, **kwargs):
        data = json.loads(request.body)
        user = get_object_or_404(User, id=data['id'])
        
        user.name = data.get('name', user.name)
        user.bio = data.get('bio', user.bio)
        user.profile_picture = data.get('profile_picture', user.profile_picture)
        user.social_media_links = data.get('social_media_links', user.social_media_links)
        
        user.save()
        
        return JsonResponse({'message': 'Profile updated successfully'}, status=200)
```