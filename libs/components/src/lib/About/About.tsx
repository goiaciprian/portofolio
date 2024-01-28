import styled from '@emotion/styled';
import React, { MutableRefObject, useContext } from 'react';
import { moonstone, Section } from '@layout';
import { Box } from '@chakra-ui/react';
import MoreModal from '../MoreModal/MoreModal';
import QueryText from '../QueryText/QueryText';
import QueryButton from '../QueryButton/QueryButton';
import { AnalyticsContext } from '@context';

const StyledAbout = styled.div`
  display: flex;
  padding: 15vh;
  justify-content: center;
  flex-direction: column;
  gap: 10vh;
  height: 100%;
  @media (max-width: 1200px) {
    padding: 3vh;
  }
`;

const moreAboutMe = [
  "Over the past 6 years, I've immersed myself in the world of coding, with 2 of those years being spent at impressive companies like Trimble and Ensemble Software. Those experiences weren't just about work; they were about soaking in knowledge from experts and honing my skills in real-world scenarios.\n",
  'I also dedicated 2 years to being a full-stack developer for my college. It was more than just a job; it was a chance to contribute to my academic community while refining my craft. This year, I proudly donned the cap and gown, marking the completion of my faculty studies in electrical engineering and computer science. My academic journey has provided me with a solid foundation to build upon in the dynamic field of technology.\n',
  "Curiosity fuels my passion. I'm always eager to learn and dive into new subjects. Conversations about cutting-edge concepts and innovative ideas are my jam. Whether it's a deep dive into the intricacies of machine learning or dissecting the philosophy behind user experience design, count me in.\n",
  "But wait, there's more to me than just code. I have a soft spot for the art of cinematography. The magic of movies and TV series never fails to captivate me. From heartwarming classics to mind-bending thrillers, I appreciate the power of storytelling through the lens.\n",
  "So, let's connect! Whether it's about programming, tech, or sharing recommendations for the latest binge-worthy series, I'm all ears. Join me in exploring the intersection of creativity and technology as we embark on a journey of discovery."
];
export const About = React.forwardRef<HTMLDivElement, NonNullable<unknown>>((props, ref) => {
  const modalRef = React.useRef<{ onOpen: () => void } | undefined>();
  const { amplitude } = useContext(AnalyticsContext);
  return (
    <>
      <Section ref={ref} scrollMarginTop={'10vh'}>
        <StyledAbout>
          <Box>
            <QueryText fontSizeBig={25} fontSizeSmall={10} lineHeight={2.5}>
              Hey there! I'm a 23-year-old programmer hailing from the vibrant land of Romania. For
              the past 6 years, I've been immersed in the world of coding. I've spent time at
              companies like Trimble and Ensemble Software, as well as 2 years as a full stack
              developer during my college years. This year, I proudly completed my studies in
              electrical engineering and computer science. Curiosity drives me—I'm always eager to
              learn and discuss new ideas. Beyond tech, I'm a huge fan of both movies and TV series.
              The art of cinematography never ceases to amaze me.
            </QueryText>
          </Box>
          <QueryButton
            fontSizeBig={undefined}
            fontSizeSmall={10}
            variant={'moonstone'}
            sx={{
              maxWidth: 'fit-content',
              alignSelf: 'center',
              width: '100%'
            }}
            onClick={() => {
              amplitude?.trackMoreAboutMe();
              modalRef.current?.onOpen();
            }}>
            More about me
          </QueryButton>
        </StyledAbout>
      </Section>
      <MoreModal
        ref={modalRef as MutableRefObject<{ onOpen: () => void }>}
        headerText={'More about me'}
        contentType={'text'}
        text={moreAboutMe}
      />
    </>
  );
});

export default About;
