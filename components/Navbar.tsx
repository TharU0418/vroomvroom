// 'use client';
// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';
// import { useAuth } from '@/hooks/useAuth';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const menuItems = [
//     // { title: 'Buy', path: '/buy' },
//     // { title: 'Sell', path: '/sell' },
//     // { title: 'Rent', path: '/rent' },
//     { title: 'Home', path: '/' },
//     { title: 'Hire', path: '/hire' },
//     { title: 'Consultation', path: '/consultation' },
//     { title: 'About Us', path: '/about' }
//   ];

//   const {user, logout} = useAuth();

//   return (
//     <nav 
//       className={`fixed w-full top-0 z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-red-700 shadow-lg py-0' 
//           : 'bg-red-700 py-0'
//       }`}
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="flex justify-between items-center">
//           {/* White rectangular logo section */}
//           <div className="w-[240px] md:w-[280px] h-20 bg-red-700 flex items-center justify-center relative z-10 ">
//             <Link href="/" className="flex items-center space-x-2">
//               <Image 
//                 src="/logo.png" 
//                 alt="Luxury Car"
//                 width={150} // replace with your actual image width
//                 height={64} // replace with your actual image height
//                 className="object-contain"
//               />
//             </Link>
//           </div>

//           {/* Trapezoidal red section */}
//           <div className="flex-1 relative overflow-hidden">
//             {/* Trapezoid background */}
//            <div 
//               className="absolute top-0 right-0 h-full w-full "
//               style={{ 
//                 clipPath: 'polygon(0% 0%, 96% 0%, 100% 100%, 100% 100%)',
//                 zIndex: 0
//               }}
//             />
//             {/* Desktop Menu */}
//             <div className="relative z-10 hidden md:flex items-center justify-between h-20 pl-8 pr-10">
//               <div className="flex items-center space-x-2">
//                 {menuItems.map((item) => (
//                   <Link
//                     key={item.title}
//                     href={item.path}
//                     className={`relative px-4 py-2 text-sm font-medium transition-colors ${
//                       activeMenu === item.title 
//                         ? 'text-white' 
//                         : 'text-white hover:text-white'
//                     }`}
//                     onClick={() => setActiveMenu(item.title)}
//                   >
//                     {item.title}
//                     {activeMenu === item.title && (
//                       <motion.div 
//                         className="absolute bottom-0 left-0 w-full h-0.5 bg-red-900"
//                         layoutId="activeMenu"
//                         transition={{ type: 'spring', stiffness: 300, damping: 30 }}
//                       />
//                     )}
//                   </Link>
//                 ))}
//               </div>
              
//               {user? (
//                  <div className="hidden md:flex items-center space-x-4 pr-10">
//                     {/* <button className="text-white hover:text-gray-300" aria-label="Notifications">
//                       🔔
//                     </button> */}
                
//                     <div className="relative">
//                       <div
//                         className="w-8 h-8 rounded-full overflow-hidden cursor-pointer border border-white"
//                         //onClick={() => setActiveMenu(activeMenu === 'avatar' ? null : 'avatar')}
//                       >
//                         <Link href="/profile">
//                           {!user.name ? (
//                             <Image
//                           //src="https://avatar.iran.liara.run/username?username=Tharusha+Dilshan"
//                             src={`https://avatar.iran.liara.run/public`}
//                             alt="User Avatar"
//                             width={32}
//                             height={32}
//                           />
//                           ) : (
//                             <Image
//                           //src="https://avatar.iran.liara.run/username?username=Tharusha+Dilshan"
//                             src={`https://avatar.iran.liara.run/username?username=${user?.name}`}
//                             alt="User Avatar"
//                             width={32}
//                             height={32}
//                           />
//                           )}
//                         </Link>
//                       </div>
                              
                              
//                         {/* {activeMenu === 'avatar' && (
//                                                 <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
//                                                   <Link
//                                                     href="/profile"
//                                                     className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                                     onClick={() => setActiveMenu(null)}
//                                                   >
//                                                     My Profile
//                                                   </Link>
//                                                   <button
//                                                     className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                                                     onClick={() => {
//     logout();
//     setActiveMenu(null);
//   }}
//                                                   >
//                                                     Logout
//                                                   </button>
//                                                 </div>
//                           )} */}
//                   </div>
//                 </div>
//               ):(
//                 <div className="flex space-x-3">
//                   <Link href="/sign">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="text-white border-2 border-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-red-600 transition-colors"
//                     >
//                       Sign In
//                     </motion.button>
//                   </Link>
//                   <Link href="/register">
//                     <motion.button
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                       className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors shadow-lg"
//                     >
//                       Register
//                     </motion.button>
//                   </Link>
//                 </div>)}
//             </div>

//             {/* Mobile Menu Button */}
//             {/* <motion.div 
//               whileTap={{ scale: 0.9 }}
//               className="md:hidden absolute top-1/2 right-4 transform -translate-y-1/2 z-20"
//             >
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="text-black p-2 rounded-lg hover:bg-red-600 focus:outline-none"
//               >
//                 {isOpen ? (
//                   <FiX className="h-6 w-6" />
//                 ) : (
//                   <FiMenu className="h-6 w-6" />
//                 )}
//               </button>
//             </motion.div> */}
//             <div className="md:hidden relative z-30 h-20 flex items-center justify-end pr-4">
//     {!user ? (<>{isOpen ? <></> : <>
//     <Link href="/sign">
//               <button
//                 className="w-full text-white border-2 border-white px-3 py-2 rounded-lg text-base font-medium hover:bg-white hover:text-red-600 transition-colors mb-1"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Sign In
//               </button>
//             </Link>
//     </>}</>) : (<></>)}

//   <motion.button
//     whileTap={{ scale: 0.9 }}
//     onClick={() => setIsOpen(!isOpen)}
//     className="text-white p-2 rounded-lg hover:bg-red-600 focus:outline-none"
//   >
//     {isOpen ? <FiX className="h-6 w-6" /> : <><FiMenu className="h-6 w-6" /></>}
//   </motion.button>
// </div>

//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//   {isOpen && (
//     <motion.div
//       initial={{ opacity: 0, height: 0 }}
//       animate={{ opacity: 1, height: 'auto' }}
//       exit={{ opacity: 0, height: 0 }}
//       transition={{ duration: 0.3 }}
//       className="md:hidden bg-gradient-to-b from-red-700 to-red-900 overflow-hidden"
//     >
//       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//         {menuItems.map((item) => (
//           <Link
//             key={item.title}
//             href={item.path}
//             className={`block px-3 py-3 rounded-lg text-base font-medium transition-all ${
//               activeMenu === item.title
//                 ? 'bg-red-600 text-white'
//                 : 'text-red-100 hover:bg-red-600 hover:text-white'
//             }`}
//             onClick={() => {
//               setActiveMenu(item.title);
//               setIsOpen(false);
//             }}
//           >
//             {item.title}
//           </Link>
//         ))}
//       </div>

//       <div className="mt-4 space-y-3 p-2">
//         {user ? (
//           <>
//             <Link href="/profile">
//               <button
//                 className="w-full text-left px-4 py-3 text-white font-medium hover:bg-red-600 rounded-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 My Profile
//               </button>
//             </Link>
//             <button
//               className="w-full text-left px-4 py-3 text-white font-medium hover:bg-red-600 rounded-lg"
//               onClick={() => {
//                 logout();
//                 setIsOpen(false);
//               }}
//             >
//               Logout
//             </button>
//           </>
//         ) : (
//           <>
//             {/* <Link href="/auth/signin">
//               <button
//                 className="w-full text-white border-2 border-white px-4 py-3 rounded-lg text-base font-medium hover:bg-white hover:text-red-600 transition-colors mb-2"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Sign In
//               </button>
//             </Link>
//             <Link href="/auth/signup">
//               <button
//                 className="w-full bg-white text-red-600 px-4 py-3 rounded-lg text-base font-medium hover:bg-red-50 transition-colors shadow-lg"
//                 onClick={() => setIsOpen(false)}
//               >
//                 Sign Up 
//               </button>
//             </Link> */}
//           </>
//         )}
//       </div>
//     </motion.div>
//   )}
// </AnimatePresence>

//     </nav>
//   );
// };

// export default Navbar;

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const foundItem = menuItems.find((item) => item.path === pathname);
    if (foundItem) {
      setActiveMenu(foundItem.title);
    } else {
      setActiveMenu(null);
    }
  }, [pathname]);

  const menuItems = [
    { title: 'Home', path: '/' },
    { title: 'Hire a Driver', path: '/hire' },
    { title: 'Lady Driver', path: '/ladycab' },
        { title: 'Buy', path: '/buy' },
     { title: 'Sell', path: '/sell' },
    { title: 'Rent', path: '/rent' },
    { title: 'Consultations', path: '/consultation' },
    { title: 'About Us', path: '/about' }
  ];

  const {user, logout} = useAuth();

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-red-700 shadow-lg py-0' 
          : 'bg-red-700 py-0'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* White rectangular logo section */}
          <div className="w-[240px] md:w-[280px] h-20 bg-red-700 flex items-center justify-center relative z-10 ">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/logo.png" 
                alt="Luxury Car"
                width={150} // replace with your actual image width
                height={64} // replace with your actual image height
                className="object-contain"
              />
            </Link>
          </div>

          {/* Trapezoidal red section */}
          <div className="flex-1 relative overflow-hidden">
            {/* Trapezoid background */}
           <div 
              className="absolute top-0 right-0 h-full w-full "
              style={{ 
                clipPath: 'polygon(0% 0%, 96% 0%, 100% 100%, 100% 100%)',
                zIndex: 0
              }}
            />
            {/* Desktop Menu */}
            <div className="relative z-10 hidden md:flex items-center justify-between h-20 pl-8 pr-10">
              <div className="flex items-center space-x-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.title}
                    href={item.path}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                      activeMenu === item.title 
                        ? 'text-white' 
                        : 'text-white hover:text-white'
                    }`}
                    onClick={() => setActiveMenu(item.title)}
                  >
                    {item.title}
                    {activeMenu === item.title && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-red-900"
                        layoutId="activeMenu"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
              
              {user? (
                 <div className="hidden md:flex items-center space-x-4 pr-10">
                    {/* <button className="text-white hover:text-gray-300" aria-label="Notifications">
                      🔔
                    </button> */}
                
                    <div className="relative">
                      <div
                        className="w-8 h-8 rounded-full overflow-hidden cursor-pointer border border-white"
                        //onClick={() => setActiveMenu(activeMenu === 'avatar' ? null : 'avatar')}
                      >
                        <Link href="/profile">
                          {!user.name ? (
                            <Image
                          //src="https://avatar.iran.liara.run/username?username=Tharusha+Dilshan"
                            src={`https://avatar.iran.liara.run/public`}
                            alt="User Avatar"
                            width={32}
                            height={32}
                          />
                          ) : (
                            <Image
                          //src="https://avatar.iran.liara.run/username?username=Tharusha+Dilshan"
                            src={`https://avatar.iran.liara.run/username?username=${user?.name}`}
                            alt="User Avatar"
                            width={32}
                            height={32}
                          />
                          )}
                        </Link>
                      </div>
                              
                              
                        {/* {activeMenu === 'avatar' && (
                                                <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg z-50">
                                                  <Link
                                                    href="/profile"
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    onClick={() => setActiveMenu(null)}
                                                  >
                                                    My Profile
                                                  </Link>
                                                  <button
                                                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                    onClick={() => {
    logout();
    setActiveMenu(null);
  }}
                                                  >
                                                    Logout
                                                  </button>
                                                </div>
                          )} */}
                  </div>
                </div>
              ):(
                <div className="flex space-x-3">
                  <Link href="/sign">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white border-2 border-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white hover:text-red-600 transition-colors"
                    >
                      Sign In
                    </motion.button>
                  </Link>
                  <Link href="/register">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-50 transition-colors shadow-lg"
                    >
                      Register
                    </motion.button>
                  </Link>
                </div>)}
            </div>

            {/* Mobile Menu Button */}
            {/* <motion.div 
              whileTap={{ scale: 0.9 }}
              className="md:hidden absolute top-1/2 right-4 transform -translate-y-1/2 z-20"
            >
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black p-2 rounded-lg hover:bg-red-600 focus:outline-none"
              >
                {isOpen ? (
                  <FiX className="h-6 w-6" />
                ) : (
                  <FiMenu className="h-6 w-6" />
                )}
              </button>
            </motion.div> */}
            <div className="md:hidden relative z-30 h-20 flex items-center justify-end pr-4">
    {!user ? (<>{isOpen ? <></> : <>
    <Link href="/sign">
              <button
                className="w-full text-white border-2 border-white px-3 py-2 rounded-lg text-base font-medium hover:bg-white hover:text-red-600 transition-colors mb-1"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </button>
            </Link>
    </>}</>) : (<></>)}

  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={() => setIsOpen(!isOpen)}
    className="text-white p-2 rounded-lg hover:bg-red-600 focus:outline-none"
  >
    {isOpen ? <FiX className="h-6 w-6" /> : <><FiMenu className="h-6 w-6" /></>}
  </motion.button>
</div>

          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
  {isOpen && (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3 }}
      className="md:hidden bg-gradient-to-b from-red-700 to-red-900 overflow-hidden"
    >
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        {menuItems.map((item) => (
          <Link
            key={item.title}
            href={item.path}
            className={`block px-3 py-3 rounded-lg text-base font-medium transition-all ${
              activeMenu === item.title
                ? 'bg-red-600 text-white'
                : 'text-red-100 hover:bg-red-600 hover:text-white'
            }`}
            onClick={() => {
              setActiveMenu(item.title);
              setIsOpen(false);
            }}
          >
            {item.title}
          </Link>
        ))}
      </div>

      <div className="mt-4 space-y-3 p-2">
        {user ? (
          <>
            <Link href="/profile">
              <button
                className="w-full text-left px-4 py-3 text-white font-medium hover:bg-red-600 rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                My Profile
              </button>
            </Link>
            <button
              className="w-full text-left px-4 py-3 text-white font-medium hover:bg-red-600 rounded-lg"
              onClick={() => {
                logout();
                setIsOpen(false);
              }}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            {/* <Link href="/auth/signin">
              <button
                className="w-full text-white border-2 border-white px-4 py-3 rounded-lg text-base font-medium hover:bg-white hover:text-red-600 transition-colors mb-2"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </button>
            </Link>
            <Link href="/auth/signup">
              <button
                className="w-full bg-white text-red-600 px-4 py-3 rounded-lg text-base font-medium hover:bg-red-50 transition-colors shadow-lg"
                onClick={() => setIsOpen(false)}
              >
                Sign Up 
              </button>
            </Link> */}
          </>
        )}
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </nav>
  );
};

export default Navbar;