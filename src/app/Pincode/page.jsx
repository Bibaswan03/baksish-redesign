"use client"

import { useState } from 'react';
import axios from 'axios';

const FetchLocation = () => {
  const [pincode, setPincode] = useState('');
  const [location, setLocation] = useState(null);
  const [error, setError] = useState('');

  const fetchLocationDetails = async () => {
    try {
      const response = await axios.get(`/api/pincode?pincode=${pincode}`);
      const data = response.data;

      if (data.success) {
        setLocation(data);
        setError('');
      } else {
        setLocation(null);
        setError(data.message);
      }
    } catch (error) {
      setLocation(null);
      setError('An error occurred while fetching the data.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pincode">
          Pincode
        </label>
        <input
          type="text"
          id="pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter Pincode"
        />
      </div>
      <button
        onClick={fetchLocationDetails}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Fetch Location
      </button>
      {location && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Location Details:</h3>
          <p>State: {location.state}</p>
          <p>District: {location.district}</p>
          <p>Area: {location.area}</p>
          <p>Pincode: {location.pincode}</p>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default FetchLocation;
