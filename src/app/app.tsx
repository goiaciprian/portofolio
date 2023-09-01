import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { About, Contact, Technologies, WelcomeBanner } from '@components';
import { black, Footer, Header, moonstone } from '@layout';
import { useIsInViewport } from '@hooks';
import { SectionEnum } from '@models';
import { ChevronUpIcon } from '@chakra-ui/icons';

export function App() {
  const [preventFirstRenderOfHeader, setPreventFirstRenderOfHeade] = React.useState(false);

  const firstRenderTimeout = setTimeout(() => {
    setPreventFirstRenderOfHeade(true);
    clearTimeout(firstRenderTimeout);
  }, 300);

  const welcomeRef = React.useRef<HTMLDivElement>();
  const aboutRef = React.useRef<HTMLDivElement>();
  const technologiesRef = React.useRef<HTMLDivElement>();
  const contactRef = React.useRef<HTMLDivElement>();

  const isOnWelcome = useIsInViewport(welcomeRef, {
    threshold: 0.7
  });

  const isOnAbout = useIsInViewport(aboutRef, {
    threshold: 0.7
  });

  const isOnTechnologies = useIsInViewport(technologiesRef, {
    threshold: 0.7
  });

  const isOnContact = useIsInViewport(contactRef, {
    threshold: 0.7
  });

  const activeSection = () => {
    if (isOnAbout) {
      return SectionEnum.About;
    }
    if (isOnTechnologies) {
      return SectionEnum.Technologies;
    }
    if (isOnContact) {
      return SectionEnum.Contact;
    }
    return undefined;
  };

  return (
    <Box>
      {!isOnWelcome && preventFirstRenderOfHeader && (
        <Header
          activeSection={activeSection()}
          onElementClick={[
            () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' }),
            () => technologiesRef.current?.scrollIntoView({ behavior: 'smooth' }),
            () => contactRef.current?.scrollIntoView({ behavior: 'smooth' })
          ]}
        />
      )}
      <Box>
        <WelcomeBanner ref={welcomeRef as React.MutableRefObject<HTMLDivElement>} />
        <About ref={aboutRef as React.MutableRefObject<HTMLDivElement>} />
        <Technologies ref={technologiesRef as React.MutableRefObject<HTMLDivElement>} />
        <Contact ref={contactRef as React.MutableRefObject<HTMLDivElement>} />
      </Box>
      <Footer
        onElementClick={[
          () => aboutRef.current?.scrollIntoView({ behavior: 'smooth' }),
          () => technologiesRef.current?.scrollIntoView({ behavior: 'smooth' }),
          () => contactRef.current?.scrollIntoView({ behavior: 'smooth' })
        ]}
      />
      {!isOnWelcome && preventFirstRenderOfHeader && (
        <IconButton
          aria-label={'top'}
          icon={<ChevronUpIcon />}
          variant={'outline'}
          _hover={{
            backgroundColor: black,
            color: moonstone,
            boxShadow: `0 0 25px 2px ${moonstone}`
          }}
          sx={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            borderRadius: '100px',
            backgroundColor: moonstone,
            color: black
          }}
          size={'lg'}
          onClick={() => welcomeRef.current?.scrollIntoView({ behavior: 'smooth' })}
        />
      )}
    </Box>
  );
}

export default App;
