import { Flex, Image, Text } from '@chakra-ui/react';
import { UserCard } from '../../interfaces/RightSideBar';

export const UserSideBar = ({ avatar, name }: UserCard) => (
  <Flex align='center' gap='13px'>
    <Image src={avatar} borderRadius='full' w='32px' h='32px'></Image>
    <Text color='#cdcecf'>{name}</Text>
  </Flex>
);
