import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { setAdminAuth } from '../../components/admin/utils/auth';

const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/admin/leads';

    const handleLogin = (e) => {
        e.preventDefault();
        // Simple hardcoded credentials for now
        if (username === 'admin' && password === 'admin123') {
            setAdminAuth(true);
            navigate(from, { replace: true });
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 font-sans text-gray-900" style={{fontFamily: 'system-ui, -apple-system, sans-serif'}}>
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
                {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-1">Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-1">Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors font-medium"
                    >
                        Login
                    </button>
                </form>
                <div className="mt-4 text-center text-sm text-gray-500 bg-gray-50 p-3 rounded">
                    <p className="mb-1"><strong>Demo Credentials:</strong></p>
                    <p>Username: <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-700">admin</code></p>
                    <p>Password: <code className="bg-gray-200 px-1 py-0.5 rounded text-gray-700">admin123</code></p>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
