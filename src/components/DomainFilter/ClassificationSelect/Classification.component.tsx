import DomainUtils from "../../../utils/DomainUtils";

interface Props {
  domains: string[];
}

const ClassificationSelect = (props: Props) => {
  const classifications = props.domains
    .map(DomainUtils.findClassification)
    .filter((classification, index, arr) => arr.indexOf(classification) === index);

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
