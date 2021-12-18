import {
  Box,
  Text,
  Link,
  Grid,
  Flex,
  Stack,
  Image,
  Divider,
} from '@chakra-ui/react';
import { Messages } from './components/MessageCard';
import { ChatInput } from './components/ChatInput';
import { UsersList } from './components/RightSideBar/UserCard';
import { ChatHeader } from './components/ChatHeader';
import { LeftSideBar } from './components/LeftSideBar';
import {
  AvailableUsers,
  offlineUsers,
} from './components/RightSideBar/mockData';

export const App = () => {
  return (
    <Flex>
      <LeftSideBar />

      <div style={{ minWidth: '800px' }}>
        <ChatHeader />
        <Flex>
          <Box bg='#36393F' w='889px' h='932px' color='white'>
            <Messages />
            <ChatInput />
          </Box>

          <Box bg='#2F3136' w='240px'>
            <UsersList status='AVAILABLE' users={AvailableUsers} />
            <UsersList status='OFFLINE' users={offlineUsers} />
          </Box>
        </Flex>
      </div>
    </Flex>
  );
};
