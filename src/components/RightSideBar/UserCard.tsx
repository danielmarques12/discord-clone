import { Flex, Stack, Text } from '@chakra-ui/react';
import { UsersListProps } from '../../interfaces/RightSideBar';
import { UserSideBar } from './UsersList';

export const UsersList = ({ status, users }: UsersListProps) => (
  <Flex direction='column' ml='16px' mt='22px'>
    <Text color='#8e9297' mb='10px'>{`${status} - ${users.length}`}</Text>
    <Stack spacing='11px'>
      {users.map((user) => (
        <UserSideBar avatar={user.avatar} name={user.name} />
      ))}
    </Stack>
  </Flex>
);
