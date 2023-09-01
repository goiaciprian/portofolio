import React from 'react';
import { moonstone, Section, StyledTypeAnimation } from '@layout';
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea
} from '@chakra-ui/react';
import { FieldValues, useForm } from 'react-hook-form';

export const Contact = React.forwardRef<HTMLDivElement, NonNullable<unknown>>((props, ref) => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm();
  const submit = async (data: FieldValues) => {
    console.log(data);

    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Section ref={ref} scrollMarginTop={'10vh'} onSubmit={handleSubmit(submit)}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '15vh',
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
          <Text sx={{ fontSize: '40px', display: 'inline-block', fontWeight: 'bold' }}>
            For Hire
          </Text>
        </Box>
        <Text
          sx={{
            fontSize: '25px',
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
        </Text>
        <form style={{ width: '25%', display: 'flex', flexDirection: 'column', gap: '2vh' }}>
          <FormControl isInvalid={!!errors['name']}>
            <FormLabel htmlFor='name'>Name</FormLabel>
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
            <FormLabel htmlFor='email'>Email</FormLabel>
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
            <FormLabel htmlFor='content'>Things to say</FormLabel>
            <Textarea
              id='content'
              style={{ height: '250px' }}
              size={'lg'}
              {...register('content', {
                required: 'I think you may have a few things to say'
              })}
            />
            <FormErrorMessage>
              {!!errors['content'] && (errors['content']?.message as string)}
            </FormErrorMessage>
          </FormControl>
          <Button isLoading={isSubmitting} type={'submit'} variant={'moonstone'}>
            Submit
          </Button>
        </form>
      </Box>
    </Section>
  );
});

export default Contact;
