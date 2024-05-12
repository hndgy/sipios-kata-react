import { useState } from "react";
import DomainUtils from "../../../utils/DomainUtils";
import { ArrayUtils } from "../../../utils/ArrayUtils";

interface Props {
  domains: string[];
}

const CountrySelect = (props: Props) => {
  const countries = ArrayUtils.distinct(
    props.domains.map((domain) => DomainUtils.findCountry(domain))
  );

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
