
interface Props {
  domains: string[];
}

const ClassificationSelect = (props: Props) => {
  const classifications = props.domains
    .map((domain) => domain.substring(3,5))
    .filter((classification, ignored, arr) => arr.indexOf(classification) <= 0);

  return (
    <select name="classifications" multiple>
      {classifications.map((classification) => (
        <option value={classification} key={classification}>
          {classification}
        </option>
      ))}
    </select>
  );
};

export default ClassificationSelect;
