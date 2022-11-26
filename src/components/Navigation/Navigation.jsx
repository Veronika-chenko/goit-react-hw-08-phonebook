// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
// import { StyledLink } from 'components/AppBar/AppBar.styled'; //NavLink
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { Nav, StyledLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      {!isLoggedIn && (
        <>
          <p>Welcome to PhoneBook</p>
          <AuthNav />
        </>
      )}
      {isLoggedIn && (
        <>
          <StyledLink to="/contacts">Contacts</StyledLink>
          <UserMenu />
        </>
      )}
    </Nav>
  );
};
