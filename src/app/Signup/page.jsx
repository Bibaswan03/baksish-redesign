"use client";
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import jwt from 'jsonwebtoken';
import SignupController from './SignupController';

export default function Home() {
  const [decodedToken, setDecodedToken] = useState(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      try {
        const decoded = jwt.decode(token);
        //console.log(decoded);
        setDecodedToken(decoded);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, [searchParams]);

  return (
    <>
      <SignupController decodedToken={decodedToken} />
    </>
  );
}
