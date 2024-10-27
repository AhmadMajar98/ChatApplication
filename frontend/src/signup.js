import React, { useState } from 'react';

const Register = () => {

  const [newUser, setNewUser] = useState({
    id:  Math.floor(Math.random() * 100000),
    name: '',
    img: null,
    phone: '',
    messages: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevData) => ({
      ...prevData, [name]: value,
    }));
  };

  const handleImage = (e) => {
    const { name, files } = e.target;
    setNewUser((prevData) => ({
      ...prevData, [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User registered:", newUser);
  };

  return (
    <div className='bg-gray-100 min-h-screen w-full flex items-center justify-center'>
      <form onSubmit={handleSubmit} className="max-w-6xl w-full p-10 bg-white rounded-lg shadow-lg text-gray-800 space-y-6">
        <fieldset>
          <legend className="text-4xl font-bold text-blue-700 mb-4">Sign up</legend>

          <div className="space-y-5">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Name</label>
              <input
                name="name"
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-1 p-3 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0088cc] text-gray-700"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Phone</label>
              <input
                name="phone"
                type="tel"
                id="phone"
                placeholder="Enter your phone number"
                className="mt-1 p-3 rounded bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0088cc] text-gray-700"
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Profile Image</label>
              <input
                name="img"
                type="file"
                id="img"
                accept="image/*"
                className="mt-1 p-3 rounded bg-gray-100 border border-gray-300 file:bg-blue-400 file:hover:bg-blue-700 file:text-white file:rounded file:px-3 file:py-1 file:transition file:duration-200"
                onChange={handleImage}
              />
            </div>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full mt-5 p-3 rounded bg-blue-400 text-white font-semibold hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0088cc]"
            >
              Register
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
