import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import Section from '../Section/Section';
import { LinkText } from '../Header/Header';
import { SectionEnum } from '@models';
import { BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi';
import { moonstone } from '../theme';

export function Footer({ onElementClick }: { onElementClick: (() => void | undefined)[] }) {
  const [hoveredSection, setHoveredSection] = React.useState<SectionEnum | null>(null);

  return (
    <Section height={'25vh'}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          alignItems: 'center'
        }}>
        {/*<Box sx={{ alignSelf: 'center' }}></Box>*/}
        <Box sx={{ display: 'flex', justifyContent: 'space-evenly', margin: '5vh', width: '30%' }}>
          <LinkText
            activesection={hoveredSection === SectionEnum.About}
            onClick={onElementClick[0]}
            onMouseEnter={() => setHoveredSection(SectionEnum.About)}
            onMouseLeave={() => setHoveredSection(null)}>
            About me
          </LinkText>
          <LinkText
            activesection={hoveredSection === SectionEnum.Technologies}
            onClick={onElementClick[1]}
            onMouseEnter={() => setHoveredSection(SectionEnum.Technologies)}
            onMouseLeave={() => setHoveredSection(null)}>
            Projects
          </LinkText>
          <LinkText
            activesection={hoveredSection === SectionEnum.Contact}
            onClick={onElementClick[2]}
            onMouseEnter={() => setHoveredSection(SectionEnum.Contact)}
            onMouseLeave={() => setHoveredSection(null)}>
            Contact
          </LinkText>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5vh' }}>
          <Text
            as='a'
            target={'_blank'}
            href='https://github.com/goiaciprian'
            sx={{ cursor: 'pointer' }}
            _hover={{
              filter: `drop-shadow(0 0 15px ${moonstone})`
            }}>
            <BiLogoGithub size={40} />
          </Text>
          <Text
            as='a'
            target={'_blank'}
            href='https://www.linkedin.com/in/ciprian-goia-951537197/'
            sx={{ cursor: 'pointer' }}
            _hover={{
              filter: `drop-shadow(0 0 15px ${moonstone})`
            }}>
            <BiLogoLinkedinSquare size={40} />
          </Text>
        </Box>
      </Box>
    </Section>
  );
}

export default Footer;