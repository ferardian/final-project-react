export const changeLocation = (location) => {
  return {
    type: 'CHANGE_LOCATION',
    location: location
  };
};
//({ type: 'LOADING_DATA', data })) 
export const loadingData = (data) => {
  return {
    type: 'LOADING_DATA',
    data: data
  };
};
//Thunk: return function thunk(dispatch) {FETCH}; 
export const fetchData = (url) => {
  return (dispatch) => {
    dispatch(weatherIsLoading('loading'));
    fetch(url)
      .then((response) => {setTimeout(() => {dispatch(weatherIsLoading('loaded'));}, 1500);return response.json();})
      .then(data => dispatch({ type: 'LOADING_DATA', data }))
      .catch(error => dispatch(weatherIsLoading('error')));
  };
};

//dispatch{ type: 'WEATHER_IS_LOADING', isLoading } 
export const nameHandleChange = (name) => {
  return {
    type: 'CHANGE_NAME',
    name: name
  };
};

//Action clicked toggleCityForm: true
export const toggleCityFormOnClick = (boolean) => {
  return {
    type: 'CLICK_TOGGLE_CITY_FORM',
    toggleCityForm: !boolean
  };
};

export const loadingCities = (cities) => {
  return {
    type: 'LOADING_CITIES',
    cityList: cities
  };
};

export const weatherIsLoading = (loadingStatus) => {
  return {
    type: 'WEATHER_IS_LOADING',
    loadingStatus: loadingStatus
  };
};
