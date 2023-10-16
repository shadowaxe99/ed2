```javascript
import axios from 'axios';

export const ADD_AFFILIATION = 'ADD_AFFILIATION';
export const REMOVE_AFFILIATION = 'REMOVE_AFFILIATION';
export const FETCH_AFFILIATIONS = 'FETCH_AFFILIATIONS';

const apiUrl = 'http://localhost:8000/api/affiliations';

export const addAffiliation = (affiliation) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}/add`, affiliation)
      .then(response => {
        dispatch(addAffiliationSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const addAffiliationSuccess = (affiliation) => {
  return {
    type: ADD_AFFILIATION,
    payload: {
      affiliation
    }
  }
};

export const removeAffiliation = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/remove/${id}`)
      .then(response => {
        dispatch(removeAffiliationSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const removeAffiliationSuccess = (id) => {
  return {
    type: REMOVE_AFFILIATION,
    payload: {
      id
    }
  }
};

export const fetchAffiliations = (userId) => {
  return (dispatch) => {
    return axios.get(`${apiUrl}/${userId}`)
      .then(response => {
        dispatch(fetchAffiliationsSuccess(response.data))
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const fetchAffiliationsSuccess = (affiliations) => {
  return {
    type: FETCH_AFFILIATIONS,
    affiliations
  }
};
```