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

export const UserLogo = () => {
  const [isopenusermodal, setisopenusermodal] = useState(false);
  const {
    user: { name: userName, avatar },
  } = useUser();

  const userAvatar = avatar || null;
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
        {userName ? userName : 'User'}
      </UserLogoBtn>
      <UserLogoModal isopenusermodal={isopenusermodal} />
    </UserLogoBtnWrapper>
  );
};
