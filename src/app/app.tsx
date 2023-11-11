import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { About, Contact, Technologies, WelcomeBanner } from '@components';
import { black, Footer, Header, moonstone } from '@layout';
import { useFirebase, useIsBiggerThan1200, useIsInViewport } from '@hooks';
import { SectionEnum } from '@models';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { FirebaseContext } from '@context';

export function App() {
  const isBiggerThan1200 = useIsBiggerThan1200();
  const [preventFirstRenderOfHeader, setPreventFirstRenderOfHeade] = React.useState(false);

  const app = useFirebase();
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
        <FirebaseContext.Provider value={{ loaded: true, app }}>
          <Contact ref={contactRef as React.MutableRefObject<HTMLDivElement>} />
        </FirebaseContext.Provider>
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
          boxSize={isBiggerThan1200 ? undefined : 5}
          _hover={{
            backgroundColor: black,
            color: moonstone,
            boxShadow: `0 0 25px 2px ${moonstone}`
          }}
          sx={{
            position: 'fixed',
            bottom: isBiggerThan1200 ? '50px' : '10px',
            right: isBiggerThan1200 ? '50px' : '10px',
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
