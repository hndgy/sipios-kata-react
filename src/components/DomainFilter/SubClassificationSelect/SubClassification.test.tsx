import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import SubClassificationSelect from './SubClassificationSelect.component';

describe('components', () => {
  describe('SubClassificationSelect', () => {
    it('should allow the user to filter', () => {
      const domains = ['US_OK-WOK'];
      const wrapper = shallow(<SubClassificationSelect domains={domains} />);

      expect(wrapper.find("select")).toHaveLength(1);
    })

    it('should render', async () => {
      render(<SubClassificationSelect domains={['US_OK-WOK']} />);

      expect(await screen.findByText('WOK')).toBeTruthy();
    });
  })
})
