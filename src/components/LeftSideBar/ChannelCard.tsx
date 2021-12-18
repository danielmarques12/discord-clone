import { Box, Flex, Text } from '@chakra-ui/react';
import { FaHashtag } from 'react-icons/fa';
import { ActiveChannelCard } from './ActiveChannelCard';

interface Props {
  name: string;
  isActive?: boolean;
}

export const ChannelCard = ({ name, isActive }: Props) => (
  <Box cursor='pointer'>
    {!!isActive ? (
      <ActiveChannelCard name={name} />
    ) : (
      <Flex justify='space-between' ml='10px'>
        <Flex align='center' gap='9px'>
          <FaHashtag />
          <Text fontSize='15px'>{name}</Text>
        </Flex>
      </Flex>
    )}
  </Box>
);
