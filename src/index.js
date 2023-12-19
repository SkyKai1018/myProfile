import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Blog from './Blog.js';
import Introduction from './component/Introduction.js';
import WorkExperience from './component/WorkExperience';
import Education from './component/Education';
import Skills from './component/Skills';
import Other from './component/Other';
import Project from './component/Project';

function Profile() {
  return (
    <div>
      <div className="Profile">
        <Introduction />
        <WorkExperience />
        <Project />
        <Education />
        <Skills />
        <Other />
      </div >
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: '/myProfile/',
    element: <App />,
    children: [
      {
        path: '/myProfile/',
        element: <Profile />,
      },
      {
        path: '/myProfile/blog',
        element: <WorkExperience />,
      },
      {
        path: '/myProfile/blog/:id',
        element: <Blog />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);