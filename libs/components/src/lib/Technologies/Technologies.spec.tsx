import { render } from '@testing-library/react';

import Technologies from './Technologies';

describe('Technologies', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<Technologies />);
    expect(baseElement).toBeTruthy();
  });
  
});
