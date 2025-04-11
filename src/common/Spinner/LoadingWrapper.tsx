import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';
import { useLocation } from 'react-router-dom';

interface LoadingWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  children,
  delay = 2000,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true); // Reset loading khi route thay đổi
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, location.pathname]);

  return isLoading ? <Spinner /> : <>{children}</>;
};

export default LoadingWrapper;
