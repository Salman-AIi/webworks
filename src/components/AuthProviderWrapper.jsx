// src/components/AuthProviderWrapper.jsx
"use client";

import { Suspense } from "react";
import AuthProvider from "@/lib/auth-context";

export function AuthProviderWrapper({ children }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthProvider>{children}</AuthProvider>
    </Suspense>
  );
}
