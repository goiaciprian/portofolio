import React from 'react';
import { Box } from '@chakra-ui/react';
import { Section, StyledTypeAnimation } from '@layout';

export const WelcomeBanner = React.forwardRef<HTMLDivElement, NonNullable<unknown>>(
  (props, ref) => {
    return (
      <Section
        ref={ref}
        sx={{
          height: '100vh',
          flexDirection: 'row',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <Box>
          <Box sx={{ flexDirection: 'column' }}>
            {/*<img src={'/src/assets/avatar.svg'} alt='avatar' />*/}
            <StyledTypeAnimation
              sequence={['Goia Ciprian']}
              speed={25}
              repeat={0}
              cursor={false}
              style={{ margin: 'auto' }}
            />
            <Box sx={{ flexDirection: 'row' }}>
              <StyledTypeAnimation
                italic
                weight={400}
                sequence={['Frontend', 1000, 'Backend', 1000, 'DevOps', 1000]}
                speed={25}
                repeat={Infinity}
              />
              <StyledTypeAnimation sequence={['Developer']} speed={25} repeat={0} cursor={false} />
            </Box>
          </Box>
        </Box>
      </Section>
    );
  }
);

export default WelcomeBanner;
