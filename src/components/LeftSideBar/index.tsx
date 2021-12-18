import { Box, Flex, Stack, Text } from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { AudioControlBar } from './AudioControlBar';
import { ChannelCard } from './ChannelCard';

export const LeftSideBar = () => (
  <Flex
    direction='column'
    justify='space-between'
    color='#959699'
    bg='#2F3136'
    w='270px'
  >
    <Box>
      <Flex justify='space-between' align='center' m='24px 22px'>
        <Text fontSize='12px' fontWeight='500'>
          TEXT CHANNELS
        </Text>
        <FaPlus style={{ cursor: 'pointer' }} />
      </Flex>

      <Stack spacing='16px' m='0 18px'>
        <ChannelCard name='general' isActive />
        <ChannelCard name='work' />
        <ChannelCard name='gaming' />
        <ChannelCard name='random' />
        <ChannelCard name='books' />
      </Stack>
    </Box>

    <AudioControlBar />
  </Flex>
);
