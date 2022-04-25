// TO DO: FETCH FROM API
// https://restcountries.com/#api-endpoints-v3-all


import React from "react";
import { useState, useEffect } from "react";
import LogIn from "./LogIn";
import { useLocation } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const Game = () => {

    const location = useLocation();

    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => {
          setData(data)
          setLoading(false)
          for(var x in data){
              console.log(data[x])
          }
        })
    }, [])
  
    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>

   
    return(
         <div className="gameplay">
             {console.log(location.userEmail)}
            <h1>Play the game </h1>
            <h3>{location.userEmail}</h3>
            {data && data.map(country =>
                        <tr key={country.name}>
                            <td>{country.name.common} </td>
                            
                        </tr>
                    )}


        </div>
    );
};

export default Game;

