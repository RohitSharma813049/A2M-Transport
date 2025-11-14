// src/App.jsx
import { Toaster } from 'react-hot-toast';
import { Routes, Route } from 'react-router-dom';

import HomeLayout from './Pages/Home/homelayout';
import Home from './Pages/Home/home';

import { AccountLayout } from './Accounts/accountlayout';
import { Login } from './Accounts/login';
import { Register } from './Accounts/register';
import { Forgetpassword } from './Accounts/forget/forgetpassword';
import { Otpveryfy } from './Accounts/forget/otpveryfy';
import { Resetpassword } from './Accounts/forget/resetpassword';

import { Services } from './Pages/Service/services';
import { Aboutus } from './Pages/About/about';
import { Contactus } from './Pages/contactus/contactus';

import AdminRoute from './Routes/AdminRoute';

import "./App.css";
import { Dashboard } from './Admin/dashboard/dashboard';
import { AdminLayout } from './Admin/Adminlayout/Adminlayout';



import { UserProfile } from "./userProfile/profile";

import { User} from "./Admin/user/user";         // ADD THIS
import { Contactuslist } from "./Admin/contactus_details/contactus_details"; // ADD THIS

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: { fontSize: '0.875rem', borderRadius: '0.5rem' },
        }}
      />

      <Routes>

        {/* Public website routes */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="contact" element={<Contactus />} />
          <Route path="/account" element={<AccountLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgetpassword" element={<Forgetpassword />} />
          <Route path="otpverify" element={<Otpveryfy />} />
          <Route path="resetpassword" element={<Resetpassword />} />
        </Route>

        </Route>

        {/* Account Routes */}
        
        {/* ADMIN PROTECTED ROUTES */}
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminLayout />
            </AdminRoute>
          }
        >
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="userlist" element={<User/>} />        {/* NEW */}
          <Route path="contactlist" element={<Contactuslist />} /> {/* NEW */}
          <Route path="profile" element={<UserProfile />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
