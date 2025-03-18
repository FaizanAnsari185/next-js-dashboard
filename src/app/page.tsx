import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-300 to-indigo-100 flex flex-col items-center justify-center px-4 md:px-6 py-12'>
      <div className='text-center max-w-3xl'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-6'>
          Welcome to the Dashboard App
        </h1>
        
        <p className='text-lg text-gray-600 mb-8 px-4 md:px-0'>
          Manage your tasks, track analytics, and stay organized with our powerful dashboard.
        </p>
        
        <Link 
          href='/dashboard'
          className='inline-flex items-center justify-center bg-blue-600 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl text-sm md:text-base'
        >
          Go To Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Page;