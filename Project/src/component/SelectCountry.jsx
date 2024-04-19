import React from 'react'

const SelectCountry = ({setSelectCountry}) => {
  return (
     <select className="filter-by-region" onChange={(e)=>setSelectCountry(e.target.value.toLowerCase())}>
      <option hidden>Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
      <option value="" style={{fontWeight:"700",color:"red",fontSize:"1.2rem"}}>Clear Filter</option>
    </select>
  )
}

export default SelectCountry