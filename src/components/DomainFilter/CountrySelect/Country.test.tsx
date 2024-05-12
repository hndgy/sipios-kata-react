import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import CountrySelect from './CountrySelect.component';

describe('components', () => {
  describe('CountrySelect', () => {
    it('should allow the user to filter', () => {
      const domains = ['US_OK-WOK'];
      const wrapper = shallow(<CountrySelect domains={domains} />);

      expect(wrapper.find("select")).toHaveLength(1);
    })

    it('should render', async () => {
      render(<CountrySelect domains={['US_OK-WOK']} />);

      expect(await screen.findByText('US')).toBeTruthy();
    });
  })
})
