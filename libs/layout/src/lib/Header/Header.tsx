import styled from '@emotion/styled';
import { Box, Link, LinkProps } from '@chakra-ui/react';
import { SectionEnum } from '@models';
import { moonstone } from '../theme';

export interface HeaderProps {
  activeSection?: SectionEnum;
  onElementClick: (() => unknown)[];
}

const StyledHeader = styled.div`
  height: 10vh;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-end;
`;

export const LinkText = styled(Link)<LinkProps & { activesection: boolean; bulletsize?: string }>`
  font-weight: ${(props) => (props.activesection ? 'bold' : '300')};
  font-style: ${(props) => (props.activesection ? 'oblique' : 'normal')};
  font-size: 25px;
  position: relative;

  :hover {
    text-decoration: none;
  }

  ::after {
    display: ${(props) => (props.activesection ? 'block' : 'none')};
    content: '';
    width: 5px;
    height: 5px;
    background-color: ${moonstone};
    border-radius: 100%; /* create a new stacking context */
    position: absolute; //z-index: -1; /* to be below the parent element */
    bottom: -35%;
    left: 50%;
    box-shadow: 0 0 20px 2px ${moonstone};
  }

  @media (max-width: 1200px) {
    font-size: 10px;
  }
`;

const QueryBox = styled(Box)`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  display: flex;
  width: 35%;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

export function Header({ activeSection, onElementClick }: HeaderProps) {
  return (
    <StyledHeader>
      <QueryBox>
        <LinkText activesection={activeSection === SectionEnum.About} onClick={onElementClick[0]}>
          About me
        </LinkText>
        <LinkText
          activesection={activeSection === SectionEnum.Technologies}
          onClick={onElementClick[1]}>
          Projects
        </LinkText>
        <LinkText activesection={activeSection === SectionEnum.Contact} onClick={onElementClick[2]}>
          Contact
        </LinkText>
        {/*</Box>*/}
      </QueryBox>
    </StyledHeader>
  );
}
