import React, { useContext } from 'react';
import { Box, Text } from '@chakra-ui/react';
import Section from '../Section/Section';
import { LinkText } from '../Header/Header';
import { SectionEnum } from '@models';
import { BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi';
import { moonstone } from '../theme';
import { TbBrandVercel } from 'react-icons/tb';
import { Icon } from '@chakra-ui/icons';
import { useIsBiggerThan1200 } from '@hooks';
import { QueryText } from '@components';
import { AnalyticsContext } from '@context';

export function Footer({ onElementClick }: { onElementClick: (() => void | undefined)[] }) {
  const isBiggerThan1200 = useIsBiggerThan1200();
  const [hoveredSection, setHoveredSection] = React.useState<SectionEnum | null>(null);

  const { amplitude } = useContext(AnalyticsContext);

  function sendToVercel() {
    amplitude?.trackVercel();
    window.open('https://vercel.com', '_blank', 'noopener,noreferrer');
  }

  function sendToGithub() {
    amplitude?.trackVercel();
    window.open('https://github.com/goiaciprian', '_blank', 'noopener,noreferrer');
  }

  function sendToLinkedin() {
    amplitude?.trackVercel();
    window.open(
      'https://www.linkedin.com/in/ciprian-goia-951537197/',
      '_blank',
      'noopener,noreferrer'
    );
  }

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
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-evenly',
            margin: '5vh',
            width: isBiggerThan1200 ? '30%' : '100%'
          }}>
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
            onClick={sendToGithub}
            sx={{ cursor: 'pointer' }}
            _hover={{
              filter: `drop-shadow(0 0 15px ${moonstone})`
            }}>
            <BiLogoGithub size={isBiggerThan1200 ? 40 : 25} />
          </Text>
          <Text
            as='a'
            onClick={sendToLinkedin}
            sx={{ cursor: 'pointer' }}
            _hover={{
              filter: `drop-shadow(0 0 15px ${moonstone})`
            }}>
            <BiLogoLinkedinSquare size={isBiggerThan1200 ? 40 : 25} />
          </Text>
        </Box>
        <Box sx={{ display: 'flex', height: '100%', flexWrap: 'wrap', alignItems: 'center' }}>
          <QueryText fontSizeSmall={10} fontSizeBig={undefined} sx={{ paddingRight: '1rem' }}>
            Powered by
          </QueryText>
          <Icon
            onClick={sendToVercel}
            as={TbBrandVercel}
            fontSize={isBiggerThan1200 ? 30 : 20}
            sx={{ cursor: 'pointer' }}
            _hover={{
              color: `${moonstone}`,
              filter: `drop-shadow(0 0 15px ${moonstone})`
            }}
          />
          <QueryText fontSizeSmall={10} fontSizeBig={undefined}>
            Disclaimer: Work in progress
          </QueryText>
        </Box>
      </Box>
    </Section>
  );
}

export default Footer;
