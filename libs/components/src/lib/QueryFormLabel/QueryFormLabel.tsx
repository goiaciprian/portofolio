import { FormLabel, FormLabelProps } from '@chakra-ui/react';
import { useIsBiggerThan1200 } from '@hooks';

export interface QueryFormLabelProps extends Omit<FormLabelProps, 'fontSize'> {
  fontSizeBig: FormLabelProps['fontSize'];
  fontSizeSmall: FormLabelProps['fontSize'];
}

export function QueryFormLabel(props: QueryFormLabelProps) {
  const isBiggerThan1200 = useIsBiggerThan1200();
  const { children, fontSizeBig, fontSizeSmall, ...rest } = props;
  return (
    <FormLabel {...rest} fontSize={isBiggerThan1200 ? fontSizeBig : fontSizeSmall}>
      {children}
    </FormLabel>
  );
}

export default QueryFormLabel;
