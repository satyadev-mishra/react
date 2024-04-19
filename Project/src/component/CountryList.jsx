// import countriesData from "./Countriesdata.json";
import { useEffect } from "react";
import CountryCard from "./CountryCard";
const CountryList = ({ query,selectCountry}) => {
    useEffect(()=>{
        fetch('')
    })
  return (
    <div className="countries-container">
      {countriesData
        .filter((country) => country.name.common.toLowerCase().includes(query))
        .filter((country) => country.region.toLowerCase().includes(selectCountry))
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
