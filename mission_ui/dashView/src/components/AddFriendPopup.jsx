

import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddFriendPopup = ({ onClose, positionRef }) => {
  const popupRef = useRef(null);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  // Submit function (no backend currently)
  const handleSubmit = async () => {
    if (!email.trim()) {
      setEmailError('This field is required');
      toast.error('Please enter an email.');
      return;
    }

    setEmailError('');

    // You can comment the below block if no backend
    try {
      const response = await fetch('http://localhost:5000/api/friends/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Friend request sent!');
        setEmail('');
        onClose();
      } else {
        toast.error(data.message || 'Failed to send request.');
      }
    } catch (error) {
      console.error('Server error:', error);
      toast.error('Server error. Try again later.');
    }
  };

  // Copy Signup Link
  const handleCopyLink = () => {
    const signupLink = 'https://yourdomain.com/signup'; // Change this to your real signup URL
    navigator.clipboard.writeText(signupLink);
    toast.info('Signup link copied to clipboard!');
  };

  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: '280px',
          left: '85px',
          width: '500px',
          background: 'linear-gradient(to right, rgba(34, 211, 238, 0.4), rgba(59, 130, 246, 0.4))',
          border: '2px solid cyan',
          borderRadius: '1rem',
        }}
      >
        <div ref={popupRef} className="bg-blue-800 text-white rounded-xl p-4">
          <h3 className="text-lg font-semibold mb-4">Add a Friend</h3>

          {/* Email Input */}
          <div className="mb-2">
            <input
              type="email"
              placeholder="Email ID"
              className={`w-full p-2 rounded bg-white text-black focus:outline-none ${emailError ? 'border border-red-500' : ''
                }`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError && e.target.value.trim() !== '') {
                  setEmailError('');
                }
              }}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* Copy Signup Link */}
          <div className="mb-4">
            <button
              onClick={handleCopyLink}
              className="w-full px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition-colors duration-200"
            >
              Copy Signup Link
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-dark rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-dark rounded"
            >
              Send Request
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFriendPopup;
