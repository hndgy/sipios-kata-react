import { shallow } from 'enzyme';
import DomainFilter from './DomainFilter.component';
import { render, screen } from '@testing-library/react';
import CountrySelect from './CountrySelect/CountrySelect.component';
import ClassificationSelect from './ClassificationSelect/Classification.component';
import SubClassificationSelect from './SubClassificationSelect/SubClassificationSelect.component';

describe('components', () => {
  describe('DomainFilter', () => {
    it('should allow the user to filter', () => {
      const domains = ['US_OK-WOK'];
      const wrapper = shallow(<DomainFilter domains={domains} />);

      expect(wrapper.find(<CountrySelect domains={domains}/>).length == 1);
      expect(wrapper.find(<ClassificationSelect domains={domains}/>).length === 1);
      expect(wrapper.find(<SubClassificationSelect domains={domains}/>).length === 1);
    })

    it('should render', async () => {
      render(<DomainFilter domains={['US_OK-WOK']} />);

      expect(await screen.findByText('US')).toBeTruthy();
      expect(await screen.findByText('OK')).toBeTruthy();
      expect(await screen.findByText('WOK')).toBeTruthy();
    });
  })
})
