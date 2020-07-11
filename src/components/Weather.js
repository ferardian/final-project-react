import React, { Component } from 'react';
import '../App.css';
import LocationForm from './LocationForm';
import OutputDisplay from './OutputDisplay';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions.js';


// Pemanggilan API dengan React - Redux
class WeatherApp extends Component {

  
  callFetchData = (name) => {
    this.fetchData(null, name)
  }

  fetchData = (e, location) => {
    if (e) {
      e.preventDefault();
    }
    let query = this.props.location || location
    if (!location || location === '') {
      query = this.props.location;
    } else {
      query = location;
    };
    let encodedLocation = encodeURIComponent(query);
    
    // deklarasi url api dan key

    let urlPrefix = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    let urlSuffix = '&APPID=eec418ceb1be72168ff8ff738033e935&units=imperial';
    let url = urlPrefix + encodedLocation + urlSuffix;
    this.props.actions.fetchData(url);
  };

  changeLocation = (event) => {
    this.props.actions.changeLocation(event.target.value);
  };

  render() {
    const { location, loadingStatus } = this.props;
    const isButtonEnabled =
      location.length > 0;

    let currentTemp, currentCond, googleLoc;

    if (this.props.data.list && loadingStatus === 'loaded') {
      currentTemp = Math.round((this.props.data.list[0].main.temp - 32) * 5/9 );
      currentCond = this.props.data.list[1].weather[0].description;
      googleLoc = this.props.location;
    } else if (loadingStatus === 'loading') {
      currentTemp = 'Loading Data...';
      currentCond = 'Please Wait.';
    } else if (location && !this.props.data.list) {
      currentTemp = 'Error Loading Data...';
      currentCond = 'Please Try again.';
    };

    return (
        <div>
          <div className = "weatherApp">
            {/* Location Form untuk input nilai yang akan dicari */}
            <LocationForm
              fetchDataSubmit = { this.fetchData}
              changeLocationSubmit = { this.changeLocation }
              location = { this.props.location }
              disabled={!isButtonEnabled}
            />
            {/* Output display = data respon yang akan ditampilkan */}
            <OutputDisplay
              tempOutput = { currentTemp }
              condOutput = { currentCond }
            />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.location,
    data: state.data,
    loadingStatus: state.loadingStatus
  };
}

const mapDispatchToProps = (dispatch) => {
  return {actions: bindActionCreators(actions, dispatch)}
};

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
