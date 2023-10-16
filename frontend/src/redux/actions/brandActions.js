```javascript
import axios from 'axios';

export const ADD_BRAND_AFFILIATION = 'ADD_BRAND_AFFILIATION';
export const REMOVE_BRAND_AFFILIATION = 'REMOVE_BRAND_AFFILIATION';
export const FETCH_BRAND_AFFILIATIONS = 'FETCH_BRAND_AFFILIATIONS';

const apiUrl = 'http://localhost:8000/api';

export const addBrandAffiliation = (brand) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/affiliations/`, brand)
      .then(response => {
        dispatch(addBrandAffiliationSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const addBrandAffiliationSuccess = (brand) => {
  return {
    type: ADD_BRAND_AFFILIATION,
    payload: {
      brand
    }
  }
};

export const removeBrandAffiliation = (brandId) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/affiliations/${brandId}`)
      .then(response => {
        dispatch(removeBrandAffiliationSuccess(brandId))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const removeBrandAffiliationSuccess = (brandId) => {
  return {
    type: REMOVE_BRAND_AFFILIATION,
    payload: {
      brandId
    }
  }
};

export const fetchBrandAffiliations = (userId) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/users/${userId}/affiliations`)
      .then(response => {
        dispatch(fetchBrandAffiliationsSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchBrandAffiliationsSuccess = (brands) => {
  return {
    type: FETCH_BRAND_AFFILIATIONS,
    brands
  }
};
```