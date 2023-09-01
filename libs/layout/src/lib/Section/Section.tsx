import styled from '@emotion/styled';
import React from 'react';
import { Box, BoxProps } from '@chakra-ui/react';

export interface SectionProps extends BoxProps, React.PropsWithChildren {
  height?: string;
}

const SnapBox = styled(Box)<{ height?: string }>`
  height: ${(props) => props.height ?? '100vh'};
  scroll-snap-align: start;
  scroll-snap-stop: always;
  overflow-y: auto;
`;

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, ...rest }, ref) => {
    return (
      <SnapBox ref={ref} {...rest}>
        {children}
      </SnapBox>
    );
  }
);

export default Section;
