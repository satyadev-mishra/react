import { useState } from "react";
import Navbar from "./Navbar";
import Searchbar from "./Searchbar";
import SelectCountry from "./SelectCountry";
import CountryList from "./CountryList";

const Home = () => {
  const [query, setQuery] = useState('');
  const [selectCountry, setSelectCountry] = useState('');

  return (
    <>
      <Navbar />
      <main>
        <div className="search-filter-container">
          <Searchbar setQuery={setQuery} />
          <SelectCountry setSelectCountry={setSelectCountry} />
        </div>
      </main>
      <CountryList query={query} selectCountry={selectCountry} />
    </>
  );
};

export default Home;
