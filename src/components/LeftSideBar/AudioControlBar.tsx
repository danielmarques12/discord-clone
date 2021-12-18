import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { FaCog, FaHeadphones, FaMicrophone } from 'react-icons/fa';
import avatar from '../../assets/Luffynaldo_Pereira.jpg';

export const AudioControlBar = () => (
  <Flex justify='space-around' bg='#292B2F' h='52px' align='center' p='0 10px'>
    <Image src={avatar} borderRadius='full' w='32px' h='32px' />

    <Flex direction='column' fontSize='13px'>
      <Text color='#fff' fontWeight='600'>
        Ednaldo Pereira
      </Text>
      <Text color='#bdbdbf'>#42069</Text>
    </Flex>

    <Flex color='#B9BBBE' gap='13.67px' cursor='pointer'>
      <FaMicrophone size='20px' />
      <FaHeadphones size='20px' />
      <FaCog size='20px' />
    </Flex>
  </Flex>
);
