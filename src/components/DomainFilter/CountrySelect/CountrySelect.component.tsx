import { useState } from "react";

interface Props {
  domains: string[];
}

const CountrySelect = (props: Props) => {
  const countries = props.domains
    .map((domain) => domain.substring(0, 2))
    .filter((country, ignored, arr) => arr.indexOf(country) <= 0);

  return (
    <select name="countries" multiple>
      {countries.map((country) => (
        <option value={country} key={country}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
