import DomainUtils from "../../../utils/DomainUtils";
import { ArrayUtils } from "../../../utils/ArrayUtils";

interface Props {
  domains: string[];
}

const SubClassificationSelect = (props: Props) => {
  const subClassifications = ArrayUtils.distinct(
    props.domains.map((domain) => DomainUtils.findSubClassification(domain))
  );

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
