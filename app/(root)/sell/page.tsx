'use client';
import { useEffect, useState } from 'react';
//import { locations } from '@/public/data/location';
import { useAuth } from '@/hooks/useAuth';
import { DecodedToken, decodeToken } from '@/utils/decodeToken';
import { useRouter } from 'next/navigation';
import { Step1, Step2, Step3, Step4, Step5 } from '@/components/SellSteps';
import { Modal } from '@/components/modal';


export default function Sell() {
  const [currentStep, setCurrentStep] = useState(1);
 const [formData, setFormData] = useState({
  district: '', city: '', condition: '', brand: '', year: '',
  model: '', mileage: '', fueltype: '', engine_capacity: '',
  transmission: '', body_type: '', price: '', description: '',
  mobileNum: '', negotiable: false, userId: ''
});
const [files, setFiles] = useState<File[]>([]);
const [previews, setPreviews] = useState<string[]>([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [userDetails, setUserDetails] = useState<DecodedToken | null>(null);
  const router = useRouter();
  const { user } = useAuth();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [countdown, setCountdown] = useState(10);

  // Form steps
  const steps = [
    "Location",
    "Car Details",
    "Specifications",
    "Pricing",
    "Images"
  ];

  // Notification component
  const Notification = () => (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out animate-fadeInUp">
        <div className="flex items-center">
          <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span className="font-semibold">{notificationMessage}</span>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    const token = localStorage.getItem('idToken');
    if (token) {
      const decoded = decodeToken(token);
      if (decoded && decoded.email && decoded.given_name && decoded.nickname) {
        setUserDetails({
          email: decoded.email,
          given_name: decoded.given_name,
          nickname: decoded.nickname
        });
      }
    }
  }, []);

  const handleFileUpload = (acceptedFiles: File[]) => {
  const limitedFiles = acceptedFiles.slice(0, 5);
  setFiles(limitedFiles);

  // Generate previews
  const urls = limitedFiles.map(file => URL.createObjectURL(file));
  setPreviews(urls);
};

useEffect(() => {
  return () => {
    previews.forEach((url) => URL.revokeObjectURL(url));
  };
}, [previews]);



  // Check if user is authenticated
  useEffect(() => {
    if (!user) {
      setShowSignInModal(true);
      
      // Start countdown for redirect
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer);
            router.push('/sign');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [user, router]);

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 5));
    } else {
      setNotificationMessage('Please fill all required fields');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        return !!formData.district && !!formData.city;
      case 2:
        return !!formData.condition && !!formData.brand && !!formData.year && !!formData.model;
      case 3:
        return !!formData.mileage && !!formData.fueltype && 
               !!formData.engine_capacity && !!formData.transmission && 
               !!formData.body_type;
      case 4:
        return !!formData.price;
      default:
        return true;
    }
  };

  // Sign In Modal Component
  const SignInModal = () => (
    <Modal isOpen={showSignInModal} onClose={() => {}}>
      <div className="p-6 text-center">
        <h3 className="text-2xl font-bold mb-4">Sign In Required</h3>
        <p className="mb-6">
          You need to sign in to list your car for sale.
          <br />
          Redirecting to sign in page in {countdown} seconds...
        </p>
        <div className="flex justify-center space-x-4">
          <button 
            onClick={() => router.push('/sign')}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Sign In Now
          </button>
          <button 
            onClick={() => router.push('/')}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
          >
            Go Home
          </button>
        </div>
      </div>
    </Modal>
  );
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(5) || files.length === 0) {
      setNotificationMessage('Please fill all required fields and upload at least one image');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      return;
    }

    try {
      const base64Images = await Promise.all(
        files.map(file => {
          return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        })
      );

      const payload = {
        ...formData,
        images: base64Images,
        status: 'pending',
        report: null,
        userId: user?.email,
        mobileNum: userDetails?.nickname
      };

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_BUY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Submission failed');


      setNotificationMessage('Car listed successfully!');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
      router.push('/profile');
    } catch (error) {
      setNotificationMessage('Error submitting form');
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 3000);
    }
  };

  // const currentYear = new Date().getFullYear();
  // const startYear = 1990;
  // const years = Array.from(new Array(currentYear - startYear + 1), (val, index) => currentYear - index);
  // const districts = Object.keys(locations);
  // const cities = formData.district ? locations[formData.district as keyof typeof locations] : [];

  // Step components
 
  return (
    <div className="min-h-screen bg-gray-50 p-4 pt-20">
      
      {!user ? (<>{showSignInModal && <SignInModal />}</>) : (<></>)}

      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden mt-20">
        {/* Progress bar */}
        <div className="bg-red-600 text-white p-4 text-center">
  <h1 className="text-3xl font-bold mb-2">Sell your Car</h1>

  <div className="mt-4 overflow-x-auto">
    <div className="flex items-center justify-start space-x-4 px-2 whitespace-nowrap min-w-max">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
              currentStep > index + 1
                ? 'bg-green-500'
                : currentStep === index + 1
                ? 'bg-white text-red-600'
                : 'bg-gray-300'
            }`}
          >
            {index + 1}
          </div>
          <div className="ml-2 text-sm font-medium">{step}</div>
          {index < steps.length - 1 && (
            <div
              className={`w-10 h-1 mx-2 ${
                currentStep > index + 1 ? 'bg-green-500' : 'bg-gray-300'
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  </div>
</div>


        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {currentStep === 1 && <Step1 formData={formData} setFormData={setFormData} />}
{currentStep === 2 && <Step2 formData={formData} setFormData={setFormData} />}
{currentStep === 3 && <Step3 formData={formData} setFormData={setFormData} />}
{currentStep === 4 && <Step4 formData={formData} setFormData={setFormData} />}
{currentStep === 5 && (
  <Step5
    onFileChange={handleFileUpload}
    previews={previews}
    user={user}
  />
)}


          {/* Navigation buttons */}
          <div className="flex justify-between pt-4">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg font-medium ${
                currentStep === 1
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Previous
            </button>

            {currentStep < 5 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={!user}
                className={`px-6 py-2 rounded-lg font-medium ${
                  !user
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-600 to-red-800 text-white hover:from-red-700 hover:to-red-900'
                }`}
              >
                Submit Listing
              </button>
            )}
          </div>
        </form>
      </div>
      {showNotification && <Notification />}
    </div>
  );
}