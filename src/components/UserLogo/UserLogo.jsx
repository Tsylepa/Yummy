import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import {
  UserLogoBtnWrapper,
  UserLogoBtn,
  UserAvatarWrapper,
  UserAvatarImg,
} from './UserLogo.styled';
import { UserLogoModal } from './UserLogoModal/UserLogoModal';
import useUser from '../../hooks/useUser';
import { useLocation } from 'react-router';

export const UserLogo = () => {
  const [isopenusermodal, setisopenusermodal] = useState(false);
  const {
    user: { name: userName, avatar },
  } = useUser();

  const userAvatar = avatar || null;
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <UserLogoBtnWrapper>
      <UserLogoBtn onClick={() => setisopenusermodal(!isopenusermodal)}>
        <UserAvatarWrapper>
          {userAvatar ? (
            <UserAvatarImg src={avatar} alt="user avatar" />
          ) : (
            <FiUser size={30} color={'#C4C4C4'} />
          )}
        </UserAvatarWrapper>
        <span
          style={{
            color:
              currentPath === '/main' ? 'var(--secondary-color)' : 'inherit',
          }}
        >
          {userName ? userName : 'User'}
        </span>
      </UserLogoBtn>
      <UserLogoModal isopenusermodal={isopenusermodal} />
    </UserLogoBtnWrapper>
  );
};
