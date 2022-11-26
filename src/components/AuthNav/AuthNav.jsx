// import { NavLink } from 'react-router-dom'; //not install
import { LinkWrap, StyledLink } from '../Navigation/Navigation.styled';

export const AuthNav = () => {
  return (
    <LinkWrap>
      <StyledLink to="/register">Register</StyledLink>
      <StyledLink to="/login">Log in</StyledLink>
    </LinkWrap>
  );
};
