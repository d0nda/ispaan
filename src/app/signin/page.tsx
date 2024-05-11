"use client"

import React from 'react';
import { SigninSignup } from '@/components/SigninSignup';
import Container from '@/components/ui/container';

const Signin: React.FC = () => {

  return (
    <Container>
    <div className='flex mx-4 items-center justify-center'>
      <div className="mt-8 mb-12 w-full p-4 md:w-1/2 lg:w-1/3">
      <SigninSignup />
      </div>
    
    </div>
    </Container>
  );
  
};

export default Signin;