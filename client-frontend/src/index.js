import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cookies from 'universal-cookie';
import { createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider, 
  redirect } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';


// const cookies = new Cookies();
// const setAuthToken = (authToken) => {cookies.set('authToken', authToken, { path: '/' });};
// const getAuthToken = () => {return cookies.get('authToken')};

// const tokenLoader = () => {
//   const authToken = getAuthToken();
//   if (!authToken) {
//     return redirect("/login");
//   }
//   return null;
// };

// const tokenUnloader = () => {
//   setAuthToken(null);
//   return redirect('/login');
// };

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    {/* <Route path='/login' element={<Login/>}></Route> */}
    <Route path="/" element={<App/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/signout" element={<></>}></Route>
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
