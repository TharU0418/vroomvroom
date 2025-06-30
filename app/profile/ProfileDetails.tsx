import { useEffect, useState } from "react";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  mobileNumber:string;
}
interface User {
  email: string;
  given_name: string;
}

// app/profile/ProfileDetails.tsx
export default function ProfileDetails({ user }: { user: User }) {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);

        console.log('users data', user)

  
  useEffect(() => {
    const fetchCars = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://b27zwntbxg.execute-api.eu-north-1.amazonaws.com/signin/user-reg`);
        const data = await res.json();
        console.log('data', data.users);
            console.log('users data', data)

        const filteredUsers = data.users.filter((Data1: { email: string }) => 
    Data1.email === user.email
);
    console.log('users data 2', data)

        setUsers(filteredUsers);
      } catch (err) {
        console.error('Failed to fetch cars:', err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCars();
  }, []); // ✅ keep it empty
  

  console.log('users', users[0])

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Profile Information</h1>
      {isLoading ? (<></>):(<div className="space-y-4">
        {/* <div>
          <label className="text-sm font-medium text-gray-600">User ID</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{user._id}</p>
        </div> */}
        <div>
          <label className="text-sm font-medium text-gray-600">First Name</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{users[0].firstName}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Last Name</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{users[0].lastName}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Email</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{user.email}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Mobile Number</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{users[0].mobileNumber}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Location</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{users[0].location}</p>
        </div>
        
        {/* Add more profile fields as needed */}
      </div>)}
    </div>
  );
}