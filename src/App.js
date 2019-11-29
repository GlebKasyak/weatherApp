import React from 'react';
import './App.css';
import { Info } from "./components/Info";
import { Form } from "./components/Form";
import { Weather } from "./components/Weather/Weather";

const API_KEY = "65fe616273c44b49ca4e30b569dc907b";
const COEFF_TEMP = 273.15;

class App extends React.Component {

  state = {
    temp: null,
    city: null,
    country: null,
    pressure: null,
    sunset: null,
    isError: false,
    isLoading: false
  };

  gettingWeather = (event) => {
    const city = event.target.elements.city.value;
    this.setState({isLoading: true});

    if(city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
          .then(response => response.json())
          .then(data => this.setState({
            isLoading: false,
            isError: false,
            temp: data.main.temp - COEFF_TEMP,
            city: data.name,
            country: data.sys.country,
            pressure: data.main.pressure,
            sunset: this.displayTime(data.sys.sunset),
          }))
          .catch(() => this.setState({isLoading: false, isError: true}));
    } else {
        this.setState({isError: true});
    }

    event.preventDefault();
  };

  displayTime = (time) => {
    let date = new Date();
    date.setTime(time);
    let convertedTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    return convertedTime;
  };

  render() {
    return (
        <div className="wrapper ">
            <div className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 info">
                            <Info />
                        </div>
                        <div className="col-sm-7 form">
                            <Form weatherMethod={this.gettingWeather} />
                            <Weather {...this.state}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }

}

export default App;
