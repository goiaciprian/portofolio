import { useMediaQuery } from '@chakra-ui/react';

export const useIsBiggerThan1200 = () => {
  const [isBigger] = useMediaQuery('(max-width: 1200px)', {
    ssr: true,
    fallback: true
  });
  return !isBigger;
};
