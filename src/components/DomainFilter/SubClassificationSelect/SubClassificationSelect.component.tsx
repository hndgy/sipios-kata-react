import { useState } from "react";

interface Props {
  domains: string[];
}

const SubClassificationSelect = (props: Props) => {
  const subClassifications = props.domains
    .map((domain) => domain.substring(6))
    .filter((subClassification, ignored, arr) => arr.indexOf(subClassification) <= 0);

  return (
    <select name="subClassifications" multiple>
      {subClassifications.map((subClassification) => (
        <option value={subClassification} key={subClassification}>
          {subClassification}
        </option>
      ))}
    </select>
  );
};

export default SubClassificationSelect;
