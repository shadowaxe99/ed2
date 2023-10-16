```python
from django.core.wsgi import get_wsgi_application
from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

from .views import UserRegistrationView, UserLoginView, ProfileEditingView, PreferenceSettingView, BrandAffiliationView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-token-auth/', obtain_jwt_token),
    path('api-token-refresh/', refresh_jwt_token),
    path('register/', UserRegistrationView.as_view(), name='register'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('edit-profile/', ProfileEditingView.as_view(), name='edit-profile'),
    path('set-preferences/', PreferenceSettingView.as_view(), name='set-preferences'),
    path('manage-affiliations/', BrandAffiliationView.as_view(), name='manage-affiliations'),
]

application = get_wsgi_application()
```