import {
  FETCH_CITIES_BEGIN,
  FETCH_CITIES_SUCCESS,
  FETCH_CITIES_ERROR,
} from "../actions/cityActions";

const initialState = {
  cities: [],
  isLoading: false,
  error: null,
};

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CITIES_BEGIN:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cities: action.payload.cities,
      };

    case FETCH_CITIES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
        cities: [],
      };

    default:
      return state;
  }
}
