import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { LinkWrap } from '../Navigation/Navigation.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <LinkWrap>
      <p>Welcome, {user.name}</p>
      <button type="submit" onClick={handleLogOut}>
        Logout
      </button>
    </LinkWrap>
  );
};
