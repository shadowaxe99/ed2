```python
import pytest
from django.urls import reverse
from rest_framework.test import APIClient
from models.User import User
from models.Brand import Brand
from models.Affiliation import Affiliation

@pytest.fixture
def client():
    return APIClient()

@pytest.fixture
def test_user():
    return User.objects.create(email='test@test.com', password='test123')

@pytest.fixture
def test_brand():
    return Brand.objects.create(name='Test Brand', type='Fashion')

@pytest.fixture
def test_affiliation(test_user, test_brand):
    return Affiliation.objects.create(user=test_user, brand=test_brand, status='Active')

def test_affiliation_management(client, test_user, test_brand, test_affiliation):
    client.force_authenticate(user=test_user)

    # Test adding a new affiliation
    response = client.post(reverse('manage_affiliations'), {'brand_id': test_brand.id})
    assert response.status_code == 201
    assert 'affiliation' in response.data
    assert response.data['affiliation']['brand']['name'] == 'Test Brand'
    assert response.data['affiliation']['status'] == 'Active'

    # Test removing an existing affiliation
    response = client.delete(reverse('manage_affiliations'), {'affiliation_id': test_affiliation.id})
    assert response.status_code == 204
    assert not Affiliation.objects.filter(id=test_affiliation.id).exists()
```