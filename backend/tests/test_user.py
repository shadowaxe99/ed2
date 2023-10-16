```python
import pytest
from django.urls import reverse
from rest_framework.test import APIClient
from models.User import User

@pytest.fixture
def client():
    return APIClient()

@pytest.fixture
def test_password():
    return 'strong-test-pass'

@pytest.fixture
def create_test_user(db, test_password):
    return User.objects.create_user('testuser', 'test@example.com', test_password)

@pytest.fixture
def get_or_create_token(db, create_test_user, client):
    response = client.post(reverse('token_obtain_pair'), data={'email': 'test@example.com', 'password': 'strong-test-pass'})
    return response.data['access']

def test_user_registration(client):
    response = client.post(reverse('register_user'), data={'email': 'test@example.com', 'password': 'strong-test-pass'})
    assert response.status_code == 201
    assert User.objects.count() == 1

def test_user_login(client, create_test_user):
    response = client.post(reverse('login_user'), data={'email': 'test@example.com', 'password': 'strong-test-pass'})
    assert response.status_code == 200

def test_profile_editing(client, get_or_create_token):
    client.credentials(HTTP_AUTHORIZATION='Bearer ' + get_or_create_token)
    response = client.put(reverse('edit_profile'), data={'name': 'Test User', 'bio': 'This is a test bio.'})
    assert response.status_code == 200
    assert response.data['name'] == 'Test User'
    assert response.data['bio'] == 'This is a test bio.'

def test_preference_setting(client, get_or_create_token):
    client.credentials(HTTP_AUTHORIZATION='Bearer ' + get_or_create_token)
    response = client.put(reverse('set_preferences'), data={'preferences': ['Brand1', 'Brand2']})
    assert response.status_code == 200
    assert response.data['preferences'] == ['Brand1', 'Brand2']
```