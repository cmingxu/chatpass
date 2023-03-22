import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  IconButton,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
  FlexProps,
} from '@chakra-ui/react';
import { FiArrowRight, FiCheck } from 'react-icons/fi';
import { FileChangeInfo } from 'fs/promises';

interface AskFormProps extends FlexProps {
}

export default function AskForm({...rest}: AskFormProps) {
  const [question, setQuestion] = useState<string>('');
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
    'initial'
  );
  const [error, setError] = useState(false);

  return (
    <Flex
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
      {...rest}
    >

      <Container
        bg={useColorModeValue('white', 'whiteAlpha.100')}
        p={6}
        minW={[ 'full' ]} >
        <Stack
          direction={{ base: 'column', md: 'row' }}
          minW={{base: 'full'}}
          as={'form'}
          spacing={'6px'}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState('submitting');

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (question === 'fail@example.com') {
                setError(true);
                setState('initial');
                return;
              }

              setState('success');
            }, 1000);
          }}>
            <FormControl>
              <Input
                variant={'solid'}
                borderWidth={1}
                color={'gray.800'}
                _placeholder={{
                  color: 'gray.400',
                }}
                borderColor={useColorModeValue('gray.300', 'gray.700')}
                id={'question'}
                required
                placeholder={'eg. 北京和上海哪里更宜居?'}
                aria-label={'question'}
                value={question}
                disabled={state !== 'initial'}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setQuestion(e.target.value)
                }
              />
            </FormControl>
            <FormControl w={{ base: '100%', md: '40%' }}>
              <IconButton
                bg="cyan.400"
                isLoading={state === 'submitting'}
                w="100%"
                color='white'
                fontWeight='bold'
                type={state === 'success' ? 'button' : 'submit'}
                icon={ state === 'success' ? <FiCheck /> : <FiArrowRight />} >
                Ask AI
              </IconButton>
            </FormControl>
          </Stack>
          <Text
            mt={2}
            textAlign={'center'}
            color={error ? 'red.500' : 'gray.500'}>
            {error
              ? 'Oh no an error occured! 😢 Please try again later.'
              : ""}
            </Text>
          </Container>
        </Flex>
      );
}

