// // hooks/useAuth.ts
// 'use client';
// import { useEffect, useState } from 'react';

// export const useAuth = () => {
//   const [user, setUser] = useState<any>(null);

//   useEffect(() => {
//     const token = localStorage.getItem('accessToken');
//     if (token) {
//       // Optionally decode or verify token here
//       setUser({ name: 'Authenticated User' }); // You can replace with actual claims if decoded
//     } else {
//       setUser(null);
//     }
//   }, []);

//   const logout = () => {
//     localStorage.removeItem('accessToken');
//     localStorage.removeItem('idToken');
//     setUser(null);
//   };

//   return { user, logout };
// };


// hooks/useAuth.ts
'use client';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('userEmail');
    const name = localStorage.getItem('userName');
    if (token) {
      setUser({ usera: 'Authenticated User', email:token,name:name });
    } else {
      setUser(null);
    }
    setLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setUser(null);
        router.push('/'); 
        window.location.reload();
  };

  return { user, loading, logout };
};
