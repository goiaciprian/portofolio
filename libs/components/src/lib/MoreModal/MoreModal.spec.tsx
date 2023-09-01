import { render } from '@testing-library/react';

import MoreModal from './MoreModal';

describe('MoreModal', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<MoreModal />);
    expect(baseElement).toBeTruthy();
  });
  
});
