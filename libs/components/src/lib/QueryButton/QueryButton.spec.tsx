import { render } from '@testing-library/react';

import QueryButton from './QueryButton';

describe('QueryButton', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<QueryButton />);
    expect(baseElement).toBeTruthy();
  });
  
});
