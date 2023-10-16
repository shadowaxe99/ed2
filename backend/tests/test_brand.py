```python
import pytest
from models.Brand import Brand

def test_brand_creation():
    brand = Brand(brand_name="Test Brand", brand_type="Fashion")
    assert brand.brand_name == "Test Brand"
    assert brand.brand_type == "Fashion"

def test_brand_update():
    brand = Brand(brand_name="Test Brand", brand_type="Fashion")
    brand.update_brand(brand_name="Updated Brand", brand_type="Tech")
    assert brand.brand_name == "Updated Brand"
    assert brand.brand_type == "Tech"

def test_brand_deletion():
    brand = Brand(brand_name="Test Brand", brand_type="Fashion")
    brand.delete_brand()
    assert brand.brand_name is None
    assert brand.brand_type is None
```