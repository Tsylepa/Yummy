import { useRef, useState } from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import {
  FormStyled,
  UserPhotoWrapper,
  UploadBtn,
  FieldStyled,
  LabelStyled,
  EditIcon,
  UserIcon,
  SaveChangeBtn,
} from './UserInfoForm.styled';
import { PreviewPhoto } from './PreviewPhoto/PreviewPhoto';
import { FiUser } from 'react-icons/fi';
import { IoAdd } from 'react-icons/io5';
import useUser from 'hooks/useUser';
import operations from 'redux/auth/authOperations';

export const UserInfoForm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const {
    user: { name: currentName, avatar: currentAvatar },
  } = useUser();
  const [newAvatar, setNewAvatar] = useState(null);

  const initialValue = { name: currentName, image: currentAvatar };

  const fileRef = useRef(null);

  const handleSubmit = ({ name }, { resetForm }) => {
    if (newAvatar) {
      const formData = new FormData();

      formData.append('file', newAvatar);
      dispatch(operations.updateUserAvatar(formData));
    }

    name !== currentName && dispatch(operations.updateUserName({ name }));
    resetForm();
    closeModal();
  };

  return (
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <FormStyled>
          <LabelStyled htmlFor="image" className="photo">
            <input
              ref={fileRef}
              hidden
              type="file"
              name="image"
              onChange={e => {
                setFieldValue('image', e.target.files[0]);
                setNewAvatar(e.target.files[0]);
              }}
            />

            <UserPhotoWrapper>
              {(values.image || currentAvatar) && (
                <PreviewPhoto photo={newAvatar} avatar={currentAvatar} />
              )}

              {!currentAvatar && !newAvatar && (
                <FiUser size={47} color={'#C4C4C4'} />
              )}

              <UploadBtn
                type="button"
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                <IoAdd size={20} color={'#FAFAFA'} />
              </UploadBtn>
            </UserPhotoWrapper>
          </LabelStyled>
          <LabelStyled htmlFor="name" className="nameLabel">
            <FieldStyled
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces."
              required
            />
            <UserIcon size={24} />
            <EditIcon size={19} />
          </LabelStyled>

          <SaveChangeBtn type="submit">Save Changes</SaveChangeBtn>
        </FormStyled>
      )}
    </Formik>
  );
};
