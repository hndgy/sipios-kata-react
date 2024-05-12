import { useState } from "react";
import DomainUtils from "../../../utils/DomainUtils";

interface Props {
  domains: string[];
}

const CountrySelect = (props: Props) => {
  const countries = props.domains
    .map((domain) => DomainUtils.findCountry(domain))
    .filter((country, index, arr) => arr.indexOf(country) === index);

  return (
    <select name="countries" multiple>
      {countries.map((country, index) => (
        <option value={country} key={index}>
          {country}
        </option>
      ))}
    </select>
  );
};

export default CountrySelect;
