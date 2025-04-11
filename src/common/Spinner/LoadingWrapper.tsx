import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

interface LoadingWrapperProps {
  children: React.ReactNode;
  delay?: number;
}

const LoadingWrapper: React.FC<LoadingWrapperProps> = ({
  children,
  delay = 2000,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return isLoading ? <Spinner /> : <>{children}</>;
};

export default LoadingWrapper;
