import { useEffect, useState } from "react";

interface Users {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  mobileNumber: string;
}

// interface User {
//   email: string;
//   given_name: string;
//   name:string;
// }

export default function ProfileDetails({ user }: { user: string }) {
  const [users, setUsers] = useState<Users[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
   const fetchUsers = async () => {
  try {
    setIsLoading(true);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_SIGNUP}`);
    const data = await res.json();
    console.log('data', data);

    const filteredUsers = data.users.filter(
      (item: { email: string }) => item.email === user
    );
    console.log('filteredUsers', filteredUsers);

    if (!Array.isArray(filteredUsers) || filteredUsers.length === 0) {
      console.warn("No users found for the given email:", user);
      return;
    }

    setUsers(filteredUsers); // ✅ Corrected line
    console.log('users', filteredUsers);
  } catch (err) {
    console.error("Failed to fetch users:", err);
  } finally {
    setIsLoading(false);
  }
};

    if (user) {
    fetchUsers();
  }
  }, [user]);

  const displayValue = (value?: string) => {
    return value && value.trim() !== "" ? value : "Not Found";
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Profile Information</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : users.length > 0 ? (
        (() => {
         // const currentUser = users[0]; // ⬅️ Only access after confirming users[0] exists
console.log('currentUser', users[0])
          return (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">First Name</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                  {displayValue(users[0].firstName)}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Last Name</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                  {displayValue(users[0].lastName)}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                  {displayValue(users[0].email)}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Mobile Number</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                  {displayValue(users[0].mobileNumber)}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Location</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                  {displayValue(users[0].location)}
                </p>
              </div>
              <div>
                {/* <button
                  onClick={() => alert("Edit functionality goes here")}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </button> */}
              </div>
            </div>
          );
        })()
      ) : (
        <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Full Name</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                 {user}
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                 {user}
                </p>
              </div>
             
             
            </div>
      )}
    </div>
  );
}
