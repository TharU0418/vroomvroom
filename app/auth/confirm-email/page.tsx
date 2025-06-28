import React, { Suspense } from 'react';
import ConfirmSignUp from './ConfirmSignUp ';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ConfirmSignUp />
    </Suspense>
  );
}
