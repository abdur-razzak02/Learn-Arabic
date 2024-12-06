import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ArabicWords from './components/ArabicWords';
import Details from './components/Details';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <ArabicWords></ArabicWords>,
        loader: ()=>fetch('arabicWords.json')
      },
    ]
  },
  {
    path: '/details/:Id',
    element: <Details></Details>,
    loader: async ({ params }) => {
      const response = await fetch('/arabicWords.json');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      const item = data.find((word) => word.Id.toString() === params.Id);
      if (!item) {
        throw new Error('Item not found');
      }
      return item;
    },
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
