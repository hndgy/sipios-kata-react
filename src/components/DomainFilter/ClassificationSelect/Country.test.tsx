import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import ClassificationSelect from './Classification.component';

describe('components', () => {
  describe('ClassificationSelect', () => {
    it('should allow the user to filter', () => {
      const domains = ['US_OK-WOK'];
      const wrapper = shallow(<ClassificationSelect domains={domains} />);

      expect(wrapper.find("select")).toHaveLength(1);
    })

    it('should render', async () => {
      render(<ClassificationSelect domains={['US_OK-WOK']} />);

      expect(await screen.findByText('OK')).toBeTruthy();
    });
  })
})
