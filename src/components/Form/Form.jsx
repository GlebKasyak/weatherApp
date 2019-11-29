import React from "react";

export const Form  = props =>  (

    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="City" />
        <button>Get Weather</button>
    </form>
);