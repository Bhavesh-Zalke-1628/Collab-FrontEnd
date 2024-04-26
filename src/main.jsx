import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'

import './index.css'
import {
  Route,
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import MainLayout from './layout/MainLayout.jsx'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { Provider } from 'react-redux'
import store from './redux/Store.js'
import Swimming from './pages/Swimming.jsx'
import Step from './pages/Step.jsx'
import UserProfile from './pages/UserProfile.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<MainLayout />}>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/service' element={<Swimming />}></Route>
      {/* <Route path='/process' element={<ProcessStepper />} /> */}
      <Route path='/process' element={<Step />} />
      <Route path='/admin/profile' element={<UserProfile />}></Route>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <App />
    </Provider >
  </React.StrictMode>
)
