import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from 'redux/auth/authSelectors';
import { logOutUser } from 'redux/auth/authThunk';
import { Box, Flex, Avatar, Text, Button } from '@chakra-ui/react';
import Logo from '../../images/avatar.jpeg';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <Box ml="auto">
      <Flex alignItems="center">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Avatar src={Logo} alt="logo" />
          <Text color="white">{userName}</Text>
        </Box>
        <Button
          colorScheme="teal"
          ml="10px"
          type="button"
          onClick={() => dispatch(logOutUser())}
        >
          <Text textTransform="uppercase" fontSize="12px">
            Logout
          </Text>
        </Button>
      </Flex>
    </Box>
  );
};
