import { useState } from 'react';
import style from "./Country.module.scss"
import Stats from '@/components/Stats/Stats';
import useStats from '@/utils/useStats';

 
function CountrySelector() {
  const { stats: countries, loading, error } = useStats('https://covid19.mathdro.id/api/countries');
  const [selectionCountry, setSelectionCountry] = useState('USA');
  if (!countries) return <p>Loading...</p>;
  if (error) return <p>There is and Error...</p>;

  return ( 
    <div className={style.container}>
      <div className={style.main}>
      <h2>選択した国の感染者数が表記されます</h2>
      <select onChange={(e) => setSelectionCountry(e.target.value)}>
        {countries.countries.map((country) => (
          <option
            selected={selectionCountry === country.iso3}
            key={country.name}
            value={country.iso3}
          >
            {country.name}
          </option>
        ))}
      </select>
      <Stats url={`https://covid19.mathdro.id/api/countries/${selectionCountry}`}></Stats>     
       </div>
    </div>
  );
}

export default CountrySelector;
