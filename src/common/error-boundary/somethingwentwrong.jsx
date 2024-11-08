import React from 'react';
import { Link } from 'react-router-dom';

const SomethingWentWrongPage = () => {
  return (
    <div className="flex-center min-h-screen text-center">
      <div className="max-w-sm">
        <h4 className="text-3xl font-bold text-secondary mb-4">
          Oops! Something Went Wrong
        </h4>
        <p className="text-base font-medium text-secondary mb-4">
          We apologize for the inconvenience. Please try again later.
        </p>
        <Link
          to="/"
          className="inline-block px-4 py-2 text-white bg-secondary hover:bg-secondary rounded capitalize font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SomethingWentWrongPage;
