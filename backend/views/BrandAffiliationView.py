```python
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..models import User, Brand, Affiliation
from ..serializers import AffiliationSerializer

class BrandAffiliationView(APIView):
    def get(self, request, user_id):
        user = get_object_or_404(User, pk=user_id)
        affiliations = Affiliation.objects.filter(user=user)
        serializer = AffiliationSerializer(affiliations, many=True)
        return Response(serializer.data)

    def post(self, request, user_id):
        user = get_object_or_404(User, pk=user_id)
        brand = get_object_or_404(Brand, pk=request.data.get('brand_id'))
        affiliation = Affiliation(user=user, brand=brand)
        serializer = AffiliationSerializer(affiliation, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, user_id, brand_id):
        user = get_object_or_404(User, pk=user_id)
        brand = get_object_or_404(Brand, pk=brand_id)
        affiliation = get_object_or_404(Affiliation, user=user, brand=brand)
        affiliation.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
```