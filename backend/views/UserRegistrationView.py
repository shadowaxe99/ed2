```python
from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
from django.contrib.auth.hashers import make_password
from .models import User
import json

class UserRegistrationView(View):
    def post(self, request):
        data = json.loads(request.body)
        email = data.get('email')
        password = data.get('password')
        name = data.get('name')
        bio = data.get('bio')
        profile_picture = data.get('profile_picture')
        social_media_links = data.get('social_media_links')

        if User.objects.filter(email=email).exists():
            return JsonResponse({'message': 'registration-error', 'detail': 'Email already exists'}, status=400)

        hashed_password = make_password(password)
        user = User(email=email, password=hashed_password, name=name, bio=bio, profile_picture=profile_picture, social_media_links=social_media_links)
        user.save()

        return JsonResponse({'message': 'registration-success', 'detail': 'User registered successfully'}, status=201)
```