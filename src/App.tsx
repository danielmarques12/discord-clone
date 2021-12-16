import { Box, Text, Link, Grid, Flex, Stack, Image } from '@chakra-ui/react';
import { Messages } from './components/MessageCard';
import { ChatInput } from './components/ChatInput';
import { UsersList } from './components/RightSideBar/UserCard';
import {
  AvailableUsers,
  offlineUsers,
} from './components/RightSideBar/mockData';

export const App = () => {
  return (
    <Box>
      <Flex>
        <Box bg='#36393F' w='889px' h='932px' color='white'>
          <Messages />
          <ChatInput />
        </Box>

        <Box bg='#2F3136' w='240px' v>
          <UsersList status='AVAILABLE' users={AvailableUsers} />
          <UsersList status='OFFLINE' users={offlineUsers} />
        </Box>
      </Flex>
    </Box>
  );
};
