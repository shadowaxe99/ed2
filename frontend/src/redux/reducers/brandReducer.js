```javascript
import { ADD_BRAND, REMOVE_BRAND } from '../actions/brandActions';

const initialState = {
  brands: []
};

const brandReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BRAND:
      return {
        ...state,
        brands: [...state.brands, action.payload]
      };
    case REMOVE_BRAND:
      return {
        ...state,
        brands: state.brands.filter(brand => brand.id !== action.payload)
      };
    default:
      return state;
  }
};

export default brandReducer;
```