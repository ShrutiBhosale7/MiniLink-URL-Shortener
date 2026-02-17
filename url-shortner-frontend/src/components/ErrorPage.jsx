
import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ErrorPage = ({ message }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-64px)] bg-background p-6 text-textPrimary">
      <FaExclamationTriangle className="text-6xl text-error mb-4" />
      <h1 className="text-3xl font-bold mb-2">Oops! Something went wrong.</h1>
      <p className="text-textSecondary mb-6 text-center">
        {message ? message : "An unexpected error has occurred"}
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-4 py-2 bg-primary text-white rounded hover:bg-secondary transition"
      >
        Go back to home
      </button>
    </div>
  );
};

export default ErrorPage;
