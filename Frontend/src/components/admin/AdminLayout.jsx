import { useState } from 'react';
import { Outlet, Navigate, NavLink, useNavigate } from 'react-router-dom';
import { getAdminAuth, setAdminAuth } from './utils/auth';

const AdminLayout = () => {
    const isAuthenticated = getAdminAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        setAdminAuth(false);
        navigate('/admin/login');
    };

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    const navLinkClass = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-2.5 rounded-lg transition-colors text-sm font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}`;

    return (
        <div className="min-h-screen bg-gray-100 flex text-gray-900" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                <div className="p-4 text-lg font-bold border-b border-gray-800 flex items-center justify-between">
                    <span>Nav Jyoti Admin</span>
                    <button onClick={() => setSidebarOpen(false)} className="lg:hidden text-gray-400 hover:text-white">
                        <i className="feather icon-x text-xl" />
                    </button>
                </div>
                <nav className="flex-1 p-4 space-y-1">
                    <NavLink to="/admin/leads" className={navLinkClass} onClick={() => setSidebarOpen(false)}>
                        <i className="feather icon-users" />
                        Contact Leads
                    </NavLink>
                    <NavLink to="/admin/appointments" className={navLinkClass} onClick={() => setSidebarOpen(false)}>
                        <i className="feather icon-calendar" />
                        Appointments
                    </NavLink>
                </nav>
                <div className="p-4 border-t border-gray-800">
                    <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-red-400 hover:bg-gray-800 rounded-lg transition-colors text-sm font-medium"
                    >
                        <i className="feather icon-log-out" />
                        Logout
                    </button>
                </div>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col min-w-0">
                {/* Mobile top bar */}
                <header className="lg:hidden bg-white border-b border-gray-200 px-4 py-3 flex items-center gap-3 sticky top-0 z-10">
                    <button
                        onClick={() => setSidebarOpen(true)}
                        className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
                    >
                        <i className="feather icon-menu text-xl" />
                    </button>
                    <span className="font-semibold text-gray-800">Nav Jyoti Admin</span>
                </header>

                <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto">
                    <div className="max-w-6xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
