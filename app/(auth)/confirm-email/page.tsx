import React, { Suspense } from 'react';
//import ConfirmSignUp from './ConfirmSignUp ';
import Confirmemail from './Confirmemail';

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Confirmemail />
    </Suspense>
  );
}
