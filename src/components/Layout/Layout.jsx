import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { Box, Flex, Container, Image } from '@chakra-ui/react';
import Logo from '../../images/phonebook.svg';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Box>
      <Box as="header" p="2" bg="teal.800">
        <Container maxW="container.xl">
          <Flex alignItems="center">
            <Image src={Logo} alt="logo" w="60px" mr="5" />
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </Flex>
        </Container>
      </Box>
      <Outlet />
    </Box>
  );
};
