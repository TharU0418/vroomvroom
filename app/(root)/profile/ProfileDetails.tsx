import { useEffect, useState } from "react";

interface Users {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  location: string;
  mobileNumber: string;
}

interface User {
  email: string;
  given_name: string;
  name:string;
}

export default function ProfileDetails({ user }: { user: User }) {
  const [users, setUsers] = useState<Users[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL_SIGNUP}`);
        const data = await res.json();

        const filteredUsers = data.users.filter(
          (item: { email: string }) => item.email === user.email
        );

        setUsers(filteredUsers);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [user.email]);

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
          const currentUser = users[0]; // ⬅️ Only access after confirming users[0] exists
console.log('currentUser', currentUser)
          return (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">First Name</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                  {displayValue(currentUser.firstName)}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Last Name</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                  {displayValue(currentUser.lastName)}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                  {displayValue(currentUser.email)}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Mobile Number</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                  {displayValue(currentUser.mobileNumber)}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">Location</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                  {displayValue(currentUser.location)}
                </p>
              </div>
              <div>
                <button
                  onClick={() => alert("Edit functionality goes here")}
                  className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  Edit
                </button>
              </div>
            </div>
          );
        })()
      ) : (
        <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">Full Name</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                 {user.name}
                </p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-600">Email</label>
                <p className="mt-1 p-2 bg-gray-50 rounded">
                 {user.email}
                </p>
              </div>
             
             
            </div>
      )}
    </div>
  );
}
