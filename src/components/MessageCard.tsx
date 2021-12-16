import { Flex, Image, Stack, Text } from '@chakra-ui/react';
import avatar from '../assets/Luffynaldo_Pereira.jpg';

const MessageCard = () => (
  <Flex gap='17px' align='center'>
    <Image src={avatar} borderRadius='full' w='40px' h='40px'></Image>
    <Flex direction='column'>
      <Flex align='center' gap='6px'>
        <Text fontWeight='500'>Daniel Marques</Text>
        <Text fontSize='13px' mt='4px' color='#8a8c90'>
          15/12/2021
        </Text>
      </Flex>
      <Text color='#dcddcf'>Um cacho de banana tá pago 😶</Text>
    </Flex>
  </Flex>
);

export const Messages = () => (
  <Stack spacing='19px' ml='16px'>
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
    <MessageCard />
  </Stack>
);
