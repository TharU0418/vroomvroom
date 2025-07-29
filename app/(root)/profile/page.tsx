'use client';

import ProfileLayout from './ProfileLayout';
import { useAuth } from '@/hooks/useAuth';
import { useRouteGuard } from '@/hooks/useRouteGuard';

export default function ProfilePage() {
 // const [user, setUser] = useState<DecodedToken | null>(null);
  useRouteGuard({ requiresAuth: true, redirectTo: '/' });

  // useEffect(() => {
  //   const token = localStorage.getItem('idToken');
  //   if (token) {
  //     const decoded = decodeToken(token);
  //     console.log('Decoded token:', decoded);

  //     if (decoded && decoded.email && decoded.given_name) {
  //       setUser({
  //         email: decoded.email,
  //         given_name: decoded.given_name,
  //         nickname:decoded.nickname
  //       });
  //     }
  //   }
  // }, []);


  const {user} = useAuth();


  if (!user) {
    return <div className="text-center mt-20"></div>;
  }

  console.log(user)

  return <ProfileLayout user={user} />;
}

// 'use client';

// import { useEffect, useState } from 'react';
// import ProfileLayout from './ProfileLayout';
// import { decodeToken, DecodedToken } from '@/utils/decodeToken';
// import { useRouteGuard } from '@/hooks/useRouteGuard';

// export default function ProfilePage() {
//   const [user, setUser] = useState<DecodedToken | null>(null);

//   useRouteGuard({ requiresAuth: true, redirectTo: '/' });

//   useEffect(() => {
//     const token = localStorage.getItem('idToken');
//     if (token) {
//       const decoded = decodeToken(token);
//       console.log('Decoded token:', decoded);

//       if (decoded && decoded.email && decoded.given_name) {
//         setUser({
//           email: decoded.email,
//           given_name: decoded.given_name,
//           nickname: decoded.nickname
//         });
//       }
//     } else {
//       // Use sample user for local dev or testing
//       const sampleUser: DecodedToken = {
//         email: 'tharushadil11@gmail.com',
//         given_name: 'Sample',
//         nickname: 'sample123'
//       };
//       setUser(sampleUser);
//     }
//   }, []);

//   if (!user) {
//      return <div className="text-center mt-20">Loading or not authenticated...</div>;
//    }

//   return <ProfileLayout user={user} />;
// }
