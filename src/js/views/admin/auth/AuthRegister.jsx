import React from 'react';
import RegisterForm from '../../../common/components/admin/RegisterForm';

const AuthRegister = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <RegisterForm />
    </div>
  );
};

export default AuthRegister;
