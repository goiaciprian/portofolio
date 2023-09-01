import { extendTheme, theme as defaultTheme, ThemeConfig } from '@chakra-ui/react';

export const moonstone = '#43BCCD';
export const black = '#1a202c';

export const theme: ThemeConfig = extendTheme({
  components: {
    Button: {
      variants: {
        moonstone: {
          ...defaultTheme.components.Button.variants?.unstyled,
          backgroundColor: moonstone,
          color: black,
          padding: '0 15px',
          _hover: {
            backgroundColor: black,
            color: moonstone,
            boxShadow: `0 0 25px 2px ${moonstone}`
          }
        }
      }
    }
  },
  colors: {
    brand: {
      300: moonstone
    }
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
});

export * from './styled.components';
