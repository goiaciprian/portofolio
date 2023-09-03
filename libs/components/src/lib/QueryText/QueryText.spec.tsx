import { render } from '@testing-library/react';

import QueryText from './QueryText';

describe('QueryText', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<QueryText />);
    expect(baseElement).toBeTruthy();
  });
  
});
