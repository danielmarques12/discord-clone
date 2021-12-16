import { Flex, Text } from '@chakra-ui/react';
import { FaPlusCircle } from 'react-icons/fa';

export const ChatInput = () => (
  <Flex
    bg='#40444B'
    w='857px'
    h='44px'
    borderRadius='7px'
    m='22px auto 0 auto'
    align='center'
    gap='21px'
  >
    <FaPlusCircle
      color='#dcddde'
      size='22px'
      style={{ marginLeft: '16px', cursor: 'pointer' }}
    />
    {/* That's an Input actually */}
    <Text color='#7b7e83'>Conversar em #geral</Text>
  </Flex>
);
