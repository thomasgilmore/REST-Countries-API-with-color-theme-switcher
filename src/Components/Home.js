import React, { useContext } from 'react';
import CountryCard from './CountryCard';
import { CountriesContext } from '../Context/Context';

export default function Home() {
  const { countryList } = useContext(CountriesContext);
  console.log("home", countryList);
  return (
    <div>
      <div className='flex flex-wrap justify-center gap-12'>
        {countryList.length > 0 ? countryList.map((country) => {
          return (<CountryCard key={country.name} img={country.flags.png} name={country.name} population={country.population} region={country.region} capital={country.capital} />)
        }) : null }
      </div>
    </div>
  )
}
