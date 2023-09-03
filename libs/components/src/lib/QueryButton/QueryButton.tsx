/* eslint-disable-next-line */
import { Button, ButtonProps } from '@chakra-ui/react';
import { useIsBiggerThan1200 } from '@hooks';

export interface QueryButtonProps extends Omit<ButtonProps, 'fontSize'> {
  fontSizeBig: ButtonProps['fontSize'];
  fontSizeSmall: ButtonProps['fontSize'];
}

export function QueryButton(props: QueryButtonProps) {
  const isBiggerThan1200 = useIsBiggerThan1200();
  const { children, fontSizeBig, fontSizeSmall, ...rest } = props;
  return (
    <Button {...rest} fontSize={isBiggerThan1200 ? fontSizeBig : fontSizeSmall}>
      {children}
    </Button>
  );
}

export default QueryButton;
