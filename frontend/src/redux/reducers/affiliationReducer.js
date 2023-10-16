import { ADD_AFFILIATION, REMOVE_AFFILIATION } from '../actions/affiliationActions';

const initialState = {
  affiliations: []
};

const affiliationReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_AFFILIATION:
      return {
        ...state,
        affiliations: [...state.affiliations, action.payload]
      };
    case REMOVE_AFFILIATION:
      return {
        ...state,
        affiliations: state.affiliations.filter(affiliation => affiliation.id !== action.payload)
      };
    default:
      return state;
  }
};

export default affiliationReducer;