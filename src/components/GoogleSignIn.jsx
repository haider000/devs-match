/* eslint-disable react/prop-types */
import React, { useCallback } from 'react';
import GoogleLogin from 'react-google-login';

function GoogleSignIn({ label, mutation }) {
  const { mutateAsync: registerMutation, isLoading } = mutation();

  const googleSuccess = useCallback(
    async (data) => {
      try {
        console.log(data);

        const result = data?.profileObj;
        const token = data?.tokenId;

        const payload = {
          result,
          token,
        };
        registerMutation(payload);
        alert(JSON.stringify(payload));
        // toast.promise(loginMutation(payload), {
        //   loading: 'Signing you in...',
        //   success: "You're logged in",
        //   error: 'An error occurred'
        // })
      } catch (e) {
        console.error(e.message);
      }
    },
    [registerMutation]
  );

  const googleError = () =>
    alert('Google Sign In was unsuccessful. Try again later');

  return (
    <div className="pt-6">
      <GoogleLogin
        clientId="735385976831-r1i0b3hqi73ebh30a0dqa2s3ogl882ip.apps.googleusercontent.com"
        render={(renderProps) => (
          <button
            className="inline-flex justify-center items-center space-x-2 border font-bold focus:outline-none w-full px-4 py-3 leading-7 rounded border-red-700 bg-red-700 text-white hover:text-white hover:bg-red-800 hover:border-red-800 focus:ring focus:ring-red-500 focus:ring-opacity-50 active:bg-red-700 active:border-red-700"
            color="primary"
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
            variant="contained"
          >
            <Icon />
            {label}
          </button>
        )}
        onSuccess={googleSuccess}
        onFailure={googleError}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}

const Icon = () => {
  return (
    <svg
      className="mr-5"
      style={{ width: '30px', height: '25px' }}
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"
      />
    </svg>
  );
};

export default GoogleSignIn;
