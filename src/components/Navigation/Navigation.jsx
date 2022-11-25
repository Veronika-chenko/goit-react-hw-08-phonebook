// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { LinkWrap } from 'components/AppBar/AppBar.styled';
import { StyledLink } from 'components/AppBar/AppBar.styled'; //NavLink

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkWrap>
        <StyledLink to="/">Home</StyledLink>
        {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
      </LinkWrap>
    </nav>
  );
};
