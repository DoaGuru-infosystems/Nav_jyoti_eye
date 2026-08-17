import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Public Pages (Lazy loaded)
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const AppointmentPage = React.lazy(() => import('./pages/AppointmentPage'));
const TreatmentDetail = React.lazy(() => import('./pages/TreatmentDetail'));
const VideosPage = React.lazy(() => import('./pages/VideosPage'));
const HospitalsPage = React.lazy(() => import('./pages/HospitalsPage'));
const LegalPage = React.lazy(() => import('./pages/LegalPage'));
const Error404Page = React.lazy(() => import('./pages/Error404Page'));

// Admin Pages (Lazy loaded)
const AdminLayout = React.lazy(() => import('./components/admin/AdminLayout'));
import RequireAuth from './components/admin/RequireAuth';
const AdminLogin = React.lazy(() => import('./pages/admin/AdminLogin'));
const ContactLeadsPage = React.lazy(() => import('./pages/admin/ContactLeadsPage'));
const AppointmentsPage = React.lazy(() => import('./pages/admin/AppointmentsPage'));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div></div>}>
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
      </Suspense>
    </BrowserRouter>
  );
}
