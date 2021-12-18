import { Divider, Flex, Text } from '@chakra-ui/react';

export const ChatHeader = () => (
  <Flex
    gap='13px'
    bg='#36393F'
    borderBottom='1px solid #0a0a0a'
    h='46px'
    align='center'
  >
    <Flex align='center' gap='9px' ml='17px'>
      <Text fontSize='28px' color='#727478'>
        #
      </Text>
      <Text as='b' color='#fff'>
        general
      </Text>
    </Flex>

    <Divider orientation='vertical' h='24px' m='auto 0' />

    <Text color='#FFFFF8'>Channel open to conversations</Text>
  </Flex>
);
