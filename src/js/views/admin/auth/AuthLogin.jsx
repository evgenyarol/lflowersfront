import React from 'react';
import LoginForm from '../../../common/components/admin/LoginForm';

const AuthLogin = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <LoginForm />
    </div>
  );
};

export default AuthLogin;
