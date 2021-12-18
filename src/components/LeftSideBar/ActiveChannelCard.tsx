import { Flex, Text } from '@chakra-ui/react';
import { FaCog, FaHashtag, FaUserPlus } from 'react-icons/fa';

interface Props {
  name: string;
}

export const ActiveChannelCard = ({ name }: Props) => (
  <Flex
    justify='space-between'
    bg='#393D42'
    w='224px'
    h='40px'
    borderRadius='3px'
  >
    <Flex align='center' gap='9px' ml='10px'>
      <FaHashtag />
      <Text fontSize='15px' color='#fff'>
        {name}
      </Text>
    </Flex>

    <Flex gap='6.5px' align='center' mr='10px'>
      <FaUserPlus />
      <FaCog />
    </Flex>
  </Flex>
);
