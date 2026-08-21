import { useState, useEffect } from 'react';
import { getAppointments } from '../../api';

const AppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalAppointments, setTotalAppointments] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getAppointments(page, 5);
            setAppointments(Array.isArray(result.data) ? result.data : []);
            setTotalPages(result.totalPages || 1);
            setTotalAppointments(result.total || 0);
        };
        fetchData();
    }, [page]);

    return (
        <div className="bg-gray-50 min-h-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Appointments</h1>
                    <p className="text-gray-500 mt-1 text-sm">Manage patient appointment requests.</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3 self-start">
                    <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <i className="feather icon-calendar" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium">Total Appointments</p>
                        <p className="text-xl font-bold text-gray-800">{totalAppointments}</p>
                    </div>
                </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                <th className="p-4 px-6">Patient Info</th>
                                <th className="p-4 px-6">Problem</th>
                                <th className="p-4 px-6">Preferred Date</th>
                                <th className="p-4 px-6">Submitted On</th>
                                <th className="p-4 px-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {appointments.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="p-8 text-center text-gray-500">No appointments found.</td>
                                </tr>
                            ) : (
                                appointments.map((apt) => (
                                    <tr key={apt.id} className="hover:bg-green-50/50 transition-colors group">
                                        <td className="p-4 px-6 align-top">
                                            <div className="font-semibold text-gray-800 mb-1">{apt.name}</div>
                                            <div className="flex flex-col gap-1 text-sm text-gray-500">
                                                <a href={`mailto:${apt.email}`} className="flex items-center gap-2 hover:text-green-600 transition-colors">
                                                    <i className="feather icon-mail" /> {apt.email}
                                                </a>
                                                <a href={`tel:${apt.phone}`} className="flex items-center gap-2 hover:text-green-600 transition-colors">
                                                    <i className="feather icon-phone" /> {apt.phone}
                                                </a>
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 align-top">
                                            <span className="inline-block text-sm text-gray-700 bg-gray-100 rounded px-2 py-1 max-w-[200px] truncate" title={apt.problem}>
                                                {apt.problem && apt.problem !== 'na' ? apt.problem : 'Not specified'}
                                            </span>
                                        </td>
                                        <td className="p-4 px-6 align-top">
                                            <div className="flex items-center gap-2 text-gray-800 font-medium">
                                                <i className="feather icon-clock text-green-500" />
                                                {apt.appointmentDate ? new Date(apt.appointmentDate).toLocaleDateString() : 'Not specified'}
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 align-top">
                                            <div className="text-sm text-gray-600">{new Date(apt.date).toLocaleDateString()}</div>
                                            <div className="text-xs text-gray-400 mt-1">
                                                {new Date(apt.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 align-middle text-center">
                                            <a href={`tel:${apt.phone}`} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-colors" title="Call Patient">
                                                <i className="feather icon-phone-call" />
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-3">
                {appointments.length === 0 ? (
                    <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500">No appointments found.</div>
                ) : (
                    appointments.map((apt) => (
                        <div key={apt.id} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <div className="font-semibold text-gray-800">{apt.name}</div>
                                    <div className="text-xs text-gray-400 mt-0.5">
                                        Submitted: {new Date(apt.date).toLocaleDateString()}
                                    </div>
                                </div>
                                <a href={`tel:${apt.phone}`} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-colors" title="Call Patient">
                                    <i className="feather icon-phone-call" />
                                </a>
                            </div>
                            <div className="flex flex-col gap-1 text-sm text-gray-500 mb-3">
                                <a href={`mailto:${apt.email}`} className="flex items-center gap-2 hover:text-green-600 transition-colors truncate">
                                    <i className="feather icon-mail shrink-0" /> <span className="truncate">{apt.email}</span>
                                </a>
                                <a href={`tel:${apt.phone}`} className="flex items-center gap-2 hover:text-green-600 transition-colors">
                                    <i className="feather icon-phone shrink-0" /> {apt.phone}
                                </a>
                            </div>
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div className="bg-gray-50 rounded-lg p-2">
                                    <div className="text-xs text-gray-400 mb-0.5">Preferred Date</div>
                                    <div className="font-medium text-gray-700 flex items-center gap-1">
                                        <i className="feather icon-clock text-green-500 text-xs" />
                                        {apt.appointmentDate ? new Date(apt.appointmentDate).toLocaleDateString() : 'Not specified'}
                                    </div>
                                </div>
                                <div className="bg-gray-50 rounded-lg p-2">
                                    <div className="text-xs text-gray-400 mb-0.5">Problem</div>
                                    <div className="font-medium text-gray-700 truncate">
                                        {apt.problem && apt.problem !== 'na' ? apt.problem : 'Not specified'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-between items-center mt-6 bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                    <button 
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Previous
                    </button>
                    <span className="text-sm text-gray-600">
                        Page <span className="font-semibold text-gray-900">{page}</span> of <span className="font-semibold text-gray-900">{totalPages}</span>
                    </span>
                    <button 
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        Next
                    </button>
                </div>
            )}
        </div>
    );
};

export default AppointmentsPage;
