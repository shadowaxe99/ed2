```python
from django.shortcuts import render
from django.views import View
from django.http import JsonResponse
from django.contrib.auth import authenticate, login
from .models import User
import jwt

class UserLoginView(View):
    def post(self, request):
        data = request.POST
        email = data.get('email')
        password = data.get('password')

        user = authenticate(request, email=email, password=password)

        if user is not None:
            login(request, user)
            token = jwt.encode({'user_id': user.id}, 'SECRET', algorithm='HS256')
            return JsonResponse({'message': 'login-success', 'token': token}, status=200)
        else:
            return JsonResponse({'message': 'login-error'}, status=400)
```