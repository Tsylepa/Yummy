import { useState } from 'react';
import { UserImgContainer, UserImg } from './PreviewPhoto.styled';

export const PreviewPhoto = ({ photo, avatar }) => {
  const [preview, setPreview] = useState(null);

   const reader = new FileReader();

  if (photo) {
    reader.readAsDataURL(photo);
    reader.onload = () => {
      setPreview(reader.result);
    };
  }

  return (
    <UserImgContainer>
      <UserImg src={preview ? preview : avatar} alt="preview" />
    </UserImgContainer>
  );
};
