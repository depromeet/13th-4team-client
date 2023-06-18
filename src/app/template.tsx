'use client';

import GlobalNavigationBar from '@/components/GlobalNavigationBar/GlobalNavigationBar';
import AuthProvider from '@/features/auth/components/Providers/AuthProvider';
import useGoogleLogin from '@/features/auth/hooks/useGoogleLogin';

export default function Template({ children }: StrictPropsWithChildren) {
  const { isSignedIn, signIn } = useGoogleLogin();

  return (
    <>
      <GlobalNavigationBar isSignedIn={isSignedIn} signIn={signIn} />
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}
