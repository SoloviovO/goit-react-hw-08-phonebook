import { useDispatch } from 'react-redux';
import { logInUser } from 'redux/auth/authThunk';
import { Box, Button, Container, FormLabel, Input } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    dispatch(
      logInUser({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container maxW="container.xl">
      <Box maxW="450px" m="0 auto" p="50px">
        <form onSubmit={handleSubmit} autoComplete="off">
          <FormLabel>
            Email
            <Input type="email" name="email" />
          </FormLabel>
          <FormLabel>
            Password
            <Input type="password" name="password" />
          </FormLabel>
          <Button type="submit">Log In</Button>
        </form>
      </Box>
    </Container>
  );
};
