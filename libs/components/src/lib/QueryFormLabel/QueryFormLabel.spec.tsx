import { render } from '@testing-library/react';

import QueryFormLabel from './QueryFormLabel';

describe('QueryFormLabel', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<QueryFormLabel />);
    expect(baseElement).toBeTruthy();
  });
  
});
