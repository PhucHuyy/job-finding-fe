import Error404 from '@/pages/Error404';
import React from 'react';
import { RouteObject } from 'react-router-dom';

export const publicRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Home</div>,
  },
  {
    path: '*',
    element: <Error404 />,
  },
];
