import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Signinpage from '../src/pages/signinpage';
import Signuppage from '../src/pages/signuppage';
import Allcoursespage from './pages/allcoursespage';
import Mycoursespage from './pages/mycoursespage';
import I_signuppage from './pages/i_signuppage';
import I_signinpage from './pages/i_signinpage';
import I_uploadedcoursespage from './pages/i_uploadedcoursespage';
import I_addnewcoursepage from './pages/i_addnewcoursepage';
import Profilepage from './pages/profilepage';
import VideoPage from './pages/videopage';


import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/EduVibe",
    element: <App />,
  },
  {
    path: "signin",
    element: <Signinpage />,
  },
  {
    path: "signup",
    element: <Signuppage />,
  },
  {
    path: "allcourses",
    element: <Allcoursespage />,
  },
  {
    path: "mycourses",
    element: <Mycoursespage />,
  },
  {
    path: "i_signup",
    element: <I_signuppage />,
  },
  {
    path: "i_signin",
    element: <I_signinpage />,
  },
  {
    path: "i_uploadedcourses",
    element: <I_uploadedcoursespage />,
  },
  {
    path: "i_addnewcourse",
    element: <I_addnewcoursepage />,
  },
  {
    path: "profile",
    element: <Profilepage />,
  },
  {
    path: "video",
    element: <VideoPage />,
  },
  {
    path: "video/:courseId", // Added course ID as a parameter
    element: <VideoPage />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
