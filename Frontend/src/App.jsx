import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Public Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AppointmentPage from './pages/AppointmentPage';
import TreatmentDetail from './pages/TreatmentDetail';
import VideosPage from './pages/VideosPage';
import HospitalsPage from './pages/HospitalsPage';
import LegalPage from './pages/LegalPage';
import Error404Page from './pages/Error404Page';

// Admin Pages
import AdminLayout from './components/admin/AdminLayout';
import RequireAuth from './components/admin/RequireAuth';
import AdminLogin from './pages/admin/AdminLogin';
import ContactLeadsPage from './pages/admin/ContactLeadsPage';
import AppointmentsPage from './pages/admin/AppointmentsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes with Shared Layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/appointment" element={<AppointmentPage />} />
          <Route path="/treatments/:slug" element={<TreatmentDetail />} />
          <Route path="/eye-care-videos" element={<VideosPage />} />
          <Route path="/hospitals" element={<HospitalsPage />} />
          <Route path="/legal/:slug" element={<LegalPage />} />
          <Route path="*" element={<Error404Page />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={
          <RequireAuth>
            <AdminLayout />
          </RequireAuth>
        }>
          <Route index element={<Navigate to="/admin/leads" replace />} />
          <Route path="leads" element={<ContactLeadsPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
