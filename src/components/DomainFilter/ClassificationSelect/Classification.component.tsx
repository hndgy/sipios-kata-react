import { ArrayUtils } from "../../../utils/ArrayUtils";
import DomainUtils from "../../../utils/DomainUtils";

interface Props {
  domains: string[];
}

const ClassificationSelect = (props: Props) => {
  const classifications = ArrayUtils.distinct(
    props.domains.map(DomainUtils.findClassification)
  );

  return (
    <select name="classifications" multiple>
      {classifications.map((classification, index) => (
        <option value={classification} key={index}>
          {classification}
        </option>
      ))}
    </select>
  );
};

export default ClassificationSelect;
