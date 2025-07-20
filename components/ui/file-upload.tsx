'use client';
import Image from 'next/image';
//import Image from 'next/image';
import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  onChange: (files: File[]) => void;
  previews: string[];
}

export const FileUpload = ({ onChange, previews }: FileUploadProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: useCallback((acceptedFiles: File[]) => {
      const files = acceptedFiles.slice(0, 5);
      onChange(files); // previews handled in parent now
    }, [onChange]),
    accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.gif'] },
    multiple: true,
    maxFiles: 5,
  });

  return (
    <div className="w-full max-w-4xl mx-auto min-h-96 border border-dashed bg-white border-neutral-200 rounded-lg">
      <div
        {...getRootProps()}
        className="h-full p-8 flex flex-col items-center justify-center cursor-pointer"
      >
        <input {...getInputProps()} />
        {previews.length > 0 ? (
          <div className="flex flex-wrap gap-4">
            {previews.map((preview, index) => (
              <div key={index} className="w-32 h-32 relative">
                <Image
                  src={preview}
                  alt={`Preview ${index}`}
                  className="w-full h-full object-cover rounded-lg"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            {isDragActive ? (
              <p className="text-blue-500">Drop the files here...</p>
            ) : (
              <>
                <span className="text-4xl">📁</span>
                <p className="text-center text-neutral-500">
                  Drag & drop up to 5 images here, or click to select files
                </p>
                <em className="text-xs text-neutral-400">
                  (Only *.jpeg, *.jpg, *.png, *.gif images will be accepted)
                </em>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};


// components/ui/file-upload.tsx
// components/ui/file-upload.tsx
// 'use client';
// import { useState, useCallback, ChangeEvent, useRef } from 'react';

// interface FileUploadProps {
//   onChange: (files: File[]) => void;
//   maxFiles?: number;
// }

// export const FileUpload = ({ onChange, maxFiles = 5 }: FileUploadProps) => {
//   const [files, setFiles] = useState<File[]>([]);
//   const [error, setError] = useState('');
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//     setError('');
//     if (files.length >= maxFiles) {
//       setError(`Maximum ${maxFiles} images allowed`);
//       return;
//     }
    
//     const droppedFiles = Array.from(e.dataTransfer.files);
//     const imageFiles = droppedFiles.filter(file => 
//       file.type.startsWith('image/')
//     );
    
//     if (imageFiles.length === 0) {
//       setError('Please select image files only');
//       return;
//     }
    
//     const newFiles = imageFiles.slice(0, maxFiles - files.length);
    
//     setFiles(prev => {
//       const updated = [...prev, ...newFiles];
//       onChange(updated);
//       return updated;
//     });
//   }, [files.length, maxFiles, onChange]);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     setError('');
//     if (!e.target.files) return;
//     if (files.length >= maxFiles) {
//       setError(`Maximum ${maxFiles} images allowed`);
//       return;
//     }
    
//     const selectedFiles = Array.from(e.target.files);
//     const imageFiles = selectedFiles.filter(file => 
//       file.type.startsWith('image/')
//     );
    
//     if (imageFiles.length === 0) {
//       setError('Please select image files only');
//       return;
//     }
    
//     const newFiles = imageFiles.slice(0, maxFiles - files.length);
    
//     setFiles(prev => {
//       const updated = [...prev, ...newFiles];
//       onChange(updated);
//       return updated;
//     });
//   };

//   const removeFile = (index: number) => {
//     setFiles(prev => {
//       const updated = prev.filter((_, i) => i !== index);
//       onChange(updated);
//       return updated;
//     });
//     setError('');
//   };

//   const triggerFileInput = () => {
//     if (fileInputRef.current && files.length < maxFiles) {
//       fileInputRef.current.click();
//     }
//   };

//   return (
//     <div className="w-full p-4">
//       <div 
//         onDragOver={e => {
//           e.preventDefault();
//           e.currentTarget.classList.add('border-red-600', 'bg-red-50');
//         }}
//         onDragLeave={e => {
//           e.preventDefault();
//           e.currentTarget.classList.remove('border-red-600', 'bg-red-50');
//         }}
//         onDrop={handleDrop}
//         onClick={triggerFileInput}
//         className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
//           files.length >= maxFiles 
//             ? 'border-gray-300 bg-gray-100 cursor-not-allowed' 
//             : 'border-gray-300 hover:border-red-500 hover:bg-red-50'
//         }`}
//       >
//         <input
//           ref={fileInputRef}
//           type="file"
//           multiple
//           accept="image/*"
//           onChange={handleChange}
//           className="hidden"
//           disabled={files.length >= maxFiles}
//         />
//         <div className="flex flex-col items-center justify-center gap-4">
//           <svg 
//             className="w-12 h-12 text-gray-400" 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24"
//           >
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
//               d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
//           </svg>
//           <div>
//             <p className="text-gray-600 font-medium">
//               {files.length >= maxFiles 
//                 ? 'Maximum images reached' 
//                 : 'Click or drag images to upload'}
//             </p>
//             <p className="text-sm text-gray-500 mt-1">
//               {files.length} of {maxFiles} images selected • JPG, PNG, WEBP
//             </p>
//           </div>
//           {files.length < maxFiles && (
//             <button
//               type="button"
//               className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
//             >
//               Browse Files
//             </button>
//           )}
//         </div>
//       </div>

//       {error && (
//         <div className="mt-3 text-red-600 text-center font-medium">
//           {error}
//         </div>
//       )}

//       {/* Preview section */}
//       {files.length > 0 && (
//         <div className="mt-6">
//           <h3 className="text-lg font-medium text-gray-900 mb-3">Selected Images</h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
//             {files.map((file, index) => (
//               <div 
//                 key={index} 
//                 className="relative group border border-gray-200 rounded-lg overflow-hidden"
//               >
//                 <img
//                   src={URL.createObjectURL(file)}
//                   alt={`Preview ${index + 1}`}
//                   className="w-full h-32 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all flex items-center justify-center">
//                   <button
//                     type="button"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       removeFile(index);
//                     }}
//                     className="text-white bg-red-600 rounded-full w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
//                   >
//                     ×
//                   </button>
//                 </div>
//                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs p-1 text-center truncate">
//                   {file.name}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };