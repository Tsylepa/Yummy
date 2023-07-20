import { instance } from 'api/APIconfig';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
// import axios from 'axios';

const subscribe = createAsyncThunk(
  '/subscribe',
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await instance.get('/subscribe', credentials);
      localStorage.setItem('userEmailSubscribe', JSON.stringify(data.user.email));
      toast.success(
        'Congratulations! To verify your account, follow the link sent to your email',
        {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          // theme: 'dark',
        }
      );
      return data;
    } catch (error) {
      if (error.response.status === 409) {
        toast.error('This email adress already subscribed to the newsletter');
        return rejectWithValue(error.message);
      }
      toast.error('This email already exists');
      return rejectWithValue(error.message);
    }
  }
);

export default subscribe;