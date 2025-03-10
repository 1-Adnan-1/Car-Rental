import React from "react";
import { useNavigate } from "react-router-dom";

interface ErrorProps {
  message: string;
}

const ErrorComponent: React.FC<ErrorProps> = ({ message }) => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center justify-center mb-10 mt-3">
      <div className="error-container bg-red-200 p-6 max-w-md w-full rounded-lg border border-red-300 shadow-md">
        <h2 className="text-red-500 font-bold text-lg text-center">
          Bir Hata Oluştu
        </h2>
        <p className="text-red-700 mt-2 text-center">{message}</p>
        <div className="mt-4 text-center">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleGoBack();
            }}
            className="text-black focus:outline-none"
          >
            Geri Dön
          </a>
        </div>
      </div>
    </div>
  );
};

export default ErrorComponent;
