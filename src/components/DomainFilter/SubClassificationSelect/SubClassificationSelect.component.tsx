import { useState } from "react";
import DomainUtils from "../../../utils/DomainUtils";

interface Props {
  domains: string[];
}

const SubClassificationSelect = (props: Props) => {
  const subClassifications = props.domains
    .map((domain) => DomainUtils.findSubClassification(domain))
    .filter((subClassification, index, arr) => arr.indexOf(subClassification) === index);

  return (
    <select name="subClassifications" multiple>
      {subClassifications.map((subClassification, index) => (
        <option value={subClassification} key={index}>
          {subClassification}
        </option>
      ))}
    </select>
  );
};

export default SubClassificationSelect;
