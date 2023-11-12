import React from 'react';
import { Section, StyledTypeAnimation } from '@layout';
import { Box, FormControl, FormErrorMessage, Input, Textarea } from '@chakra-ui/react';
import { FieldValues, useForm } from 'react-hook-form';
import QueryText from '../QueryText/QueryText';
import { useDatabase, useIsBiggerThan1200 } from '@hooks';
import QueryFormLabel from '../QueryFormLabel/QueryFormLabel';
import QueryButton from '../QueryButton/QueryButton';
import { addDoc, collection } from 'firebase/firestore';
import { useIsBiggerThan1200 } from '@hooks';
        

export const Contact = React.forwardRef<HTMLDivElement, NonNullable<unknown>>((props, ref) => {
  const isBiggerThan1200 = useIsBiggerThan1200();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();

  const [db, collectionName] = useDatabase();
  const submit = async (data: FieldValues) => {
    await addDoc(collection(db, collectionName), {
      email: data.email,
      message: data.content,
      name: data.name
    });
  };

  return (
    <Section ref={ref} scrollMarginTop={'10vh'} onSubmit={handleSubmit(submit)}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: isBiggerThan1200 ? '15vh' : '3vh',
          height: '100%',
          flexDirection: 'column',
          gap: '5vh'
        }}>
        <Box>
          <StyledTypeAnimation
            style={{ width: '300px' }}
            italic
            weight={400}
            sequence={['OPEN', 1500, 'NOT OPEN', 1500]}
            repeat={Infinity}
            speed={25}
          />
          <QueryText
            fontSizeBig={40}
            fontSizeSmall={20}
            sx={{ display: 'inline-block', fontWeight: 'bold' }}>
            For Hire
          </QueryText>
        </Box>
        <QueryText
          fontSizeBig={25}
          fontSizeSmall={10}
          sx={{
            fontStyle: 'italic'
          }}>
          Thanks for checking me out{' '}
          <span
            role='img'
            aria-label='wink-emoji'
            aria-labelledby='wink-emoji'
            style={{
              fontStyle: 'normal'
            }}>
            😉
          </span>
          . If you want to contact me for some work or feedback now is the time
        </QueryText>
        <form
          style={{
            width: isBiggerThan1200 ? '25%' : '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: '2vh'
          }}>
          <FormControl isInvalid={!!errors['name']}>
            <QueryFormLabel fontSizeSmall={10} fontSizeBig={undefined} htmlFor='name'>
              Name
            </QueryFormLabel>
            <Input
              id='name'
              {...register('name', {
                required: 'The name is required'
              })}
            />
            <FormErrorMessage>
              {!!errors['name'] && (errors['name']?.message as string)}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors['email']}>
            <QueryFormLabel fontSizeSmall={10} fontSizeBig={undefined} htmlFor='email'>
              Email
            </QueryFormLabel>
            <Input
              id='email'
              {...register('email', {
                required: 'The email is required'
              })}
            />
            <FormErrorMessage>
              {!!errors['email'] && (errors['email']?.message as string)}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors['content']}>
            <QueryFormLabel fontSizeSmall={10} fontSizeBig={undefined} htmlFor='content'>
              Things to say
            </QueryFormLabel>
            <Textarea
              id='content'
              style={{ height: isBiggerThan1200 ? '250px' : '100px' }}
              size={'lg'}
              {...register('content', {
                required: 'I think you may have a few things to say'
              })}
            />
            <FormErrorMessage>
              {!!errors['content'] && (errors['content']?.message as string)}
            </FormErrorMessage>
          </FormControl>
          <QueryButton
            fontSizeSmall={10}
            fontSizeBig={undefined}
            isLoading={isSubmitting}
            type={'submit'}
            variant={'moonstone'}>
            Submit
          </QueryButton>
        </form>
      </Box>
    </Section>
  );
});

export default Contact;
