import React from "react";
import { Error } from "../Error";
import { Loading } from "../Loading";

export const Weather = props => {

    const { temp, city, country, pressure, sunset, isError, isLoading } = props;

    if (isError) return <Error />;

    if (isLoading) return <Loading />;

    return(
        <div className="infoWeath">
            { city &&
                <div>
                    <p>Location: <span>{city}, {country}</span></p>
                    <p>Temperature: <span>{temp}</span></p>
                    <p>Pressure: <span>{pressure}</span></p>
                    <p>Sunset: <span>{sunset}</span></p>
                </div>
            }
        </div>
    )
};