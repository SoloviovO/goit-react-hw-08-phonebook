import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 500;
  color: teal;
  &:hover {
    color: #66d0d0;
  }
  &.active {
    color: tomato;
    &:hover {
      color: #66d0d0;
    }
  }
`;
