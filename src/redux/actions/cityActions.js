import { getCities as getCitiesFromApi } from "../../services/api/api";

export const FETCH_CITIES_BEGIN = "FETCH_CITIES_BEGIN";
export const FETCH_CITIES_SUCCESS = "FETCH_CITIES_SUCCESS";
export const FETCH_CITIES_ERROR = "FETCH_CITIES_ERROR";

export const fetchCitiesBegin = () => ({
  type: FETCH_CITIES_BEGIN,
});

export const fetchCitiesSuccess = (cities) => {
  return {
    type: FETCH_CITIES_SUCCESS,
    payload: { cities },
  };
};

export const fetchCitiesError = (error) => {
  return {
    type: FETCH_CITIES_ERROR,
    payload: { error },
  };
};

export function fetchCities() {
  return (dispatch) => {
    dispatch(fetchCitiesBegin());

    return getCitiesFromApi()
      .then((response) => {
        dispatch(fetchCitiesSuccess(response.data.cities));
        return response.data.cities;
      })
      .catch((error) => dispatch(fetchCitiesError(error.message)));
  };
}
