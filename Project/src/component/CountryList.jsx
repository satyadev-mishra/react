// import countriesData from "./Countriesdata.json";
import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";
const CountryList = ({ query, selectCountry }) => {
  // let countriesData=[];
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    // if (countriesData.length == 0) {
    fetch("https://restcountries.com/v3.1/all") //fetch is asyn function that is why it will execute in background so it will wait to get the data
      .then((res) => res.json())
      .then((data) => {
        // countriesData = [...data];//spread operator cloning of array ...
        setCountriesData(data);
      });
      // const intravalId=setInterval(()=>{
      //   console.log("running")
      // },1000);
    // }
    // return () => {
    //   console.log("Component unmount and Cleanup function called");
    //   clearInterval(intravalId);
    // };
  }, []); //we can pass empty dependency array to render once, and pass as many variable inside array to run the code inside of useEffect block when variable updated
  return (
    <div className="countries-container">
      <button onClick={()=>{setCountriesData([])}}>Clean</button>
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .filter((country) =>
          country.region.toLowerCase().includes(selectCountry)
        )
        .map((country) => {
          return (
            <CountryCard
              key={country.name.common}
              name={country.name.common}
              flag={country.flags.svg}
              population={country.population}
              region={country.region}
              capital={country.capital?.[0]}
            />
          );
        })}
    </div>
  );
};

export default CountryList;
