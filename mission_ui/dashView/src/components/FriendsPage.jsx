import React from 'react';
import { FaPlus } from 'react-icons/fa';

const FriendsPage = () => {
  // Dummy list of friend cards
  const friends = Array(5).fill({
    name: 'Add Trip',
    image: '/beach.jpg', // Make sure this exists in public folder
  });

  return (
    <div className="w-full min-h-screen text-white p-6" style={{ background: 'linear-gradient(to bottom, #010C19 0%, #053D7F 100%)' }}>
      
      {/* Cover Image / Banner */}
      <div className="w-full h-[200px] rounded-xl overflow-hidden mb-6 border border-blue-500">
        <img
          src="/banner.jpg" // Place a banner.jpg in your public/ folder
          alt="Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Friend Card List */}
      <div className="flex flex-col gap-4">
        {friends.map((friend, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-[#12294d] px-4 py-3 rounded-lg border border-blue-600 hover:bg-[#173864] transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <img
                src={friend.image}
                alt="Friend"
                className="w-12 h-12 rounded-full object-cover border border-white"
              />
              <p className="text-lg font-medium">{friend.name}</p>
            </div>
            <button
              className="text-white hover:text-blue-300 transition"
              onClick={() => alert('Friend request logic here')}
            >
              <FaPlus size={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FriendsPage;
