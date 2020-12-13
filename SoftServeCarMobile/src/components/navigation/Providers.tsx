import React from "react";
import { AuthProvider } from "./AuthProvider";
import { Routes } from "./Routes";
import MessageStack from '../routes/MessageStack'

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

