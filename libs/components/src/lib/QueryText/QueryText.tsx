import { Text, TextProps } from '@chakra-ui/react';
import { useIsBiggerThan1200 } from '@hooks';

export interface QueryTest extends Omit<TextProps, 'fontSize'> {
  fontSizeBig: TextProps['fontSize'];
  fontSizeSmall: TextProps['fontSize'];
}

export function QueryText(props: QueryTest) {
  const isBiggerThan1200 = useIsBiggerThan1200();
  const { children, fontSizeSmall, fontSizeBig, ...rest } = props;

  return (
    <Text {...rest} fontSize={isBiggerThan1200 ? fontSizeBig : fontSizeSmall}>
      {children}
    </Text>
  );
}

export default QueryText;
