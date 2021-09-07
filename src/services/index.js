import { useMutation } from 'react-query';
import cookies from 'react-cookies';
import axios from '../config/axios.config';
import { API_ENDPOINTS } from '../config/api.config';

export const fetchSignUp = async (data) => {
  const response = await axios.post(API_ENDPOINTS.SIGNUP, data);
  return {
    response,
  };
};

export const useSignUpMutation = () => {
  return useMutation(fetchSignUp, {
    onSuccess: (data) => {
      cookies.save('authorization', data.token, {});
      localStorage.setItem('profile', JSON.stringify({ ...data }));
      alert(`user Sign Up`);
    },
  });
};

export const fetchSignIn = async (data) => {
  const response = await axios.post(API_ENDPOINTS.SIGNIN, data);
  return {
    response,
  };
};

export const useSignInMutation = () => {
  return useMutation(fetchSignIn, {
    onSuccess: (data) => {
      cookies.save('authorization', data.token, {});
      localStorage.setItem('profile', JSON.stringify({ ...data }));
      alert(`user Logged in`);
    },
  });
};
