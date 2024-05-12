import { useEffect, useState } from 'react';
import CountryFilter from './CountrySelect/CountrySelect.component';
import ClassificationSelect from './ClassificationSelect/Classification.component';
import SubClassificationSelect from './SubClassificationSelect/SubClassificationSelect.component';

interface State {
  countries: string[],
  classifications: string[],
  subClassifications: string[]
}

interface Props {
  domains?: string[]
}

const DomainFilter = (props: Props) => {
  const domains = props?.domains ?? [];

  return (<>
    <CountryFilter domains={domains}/>
    <ClassificationSelect domains={domains}/>
    <SubClassificationSelect domains={domains}/>
  </>);
}

export default DomainFilter
