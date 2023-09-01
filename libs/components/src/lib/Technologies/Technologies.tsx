import styled from '@emotion/styled';
import React from 'react';
import { Section } from '@layout';

const StyledTechnologies = styled.div`
  color: pink;
`;

export const Technologies = React.forwardRef<HTMLDivElement, NonNullable<unknown>>((props, ref) => {
  return (
    <Section ref={ref} scrollMarginTop={'10vh'}>
      <StyledTechnologies>
        <h1>Welcome to Technologies!</h1>
      </StyledTechnologies>
    </Section>
  );
});

export default Technologies;
