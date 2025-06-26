// app/profile/ProfileDetails.tsx
import type { User } from '../../types/user'; // adjust path if needed

export default function ProfileDetails({ user }: { user: User }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold mb-6">Profile Information</h1>
      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-600">User ID</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{user._id}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">First Name</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{user.firstName}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Last Name</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{user.lastName}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Email</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{user.email}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Mobile Number</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{user.mobileNumber}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-600">Location</label>
          <p className="mt-1 p-2 bg-gray-50 rounded">{user.location}</p>
        </div>
        
        {/* Add more profile fields as needed */}
      </div>
    </div>
  );
}