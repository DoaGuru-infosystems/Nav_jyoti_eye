import { useState, useEffect } from 'react';
import { getAppointments } from '../../api';

const AppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getAppointments();
            setAppointments(Array.isArray(data) ? data.reverse() : []);
        };
        fetchData();
    }, []);

    return (
        <div className="p-6 bg-gray-50 min-h-full">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Appointments</h1>
                    <p className="text-gray-500 mt-1">Manage patient appointment requests.</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                        <i className="feather icon-calendar text-lg"></i>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Appointments</p>
                        <p className="text-xl font-bold text-gray-800">{appointments.length}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500 uppercase tracking-wider">
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
                                                    <i className="feather icon-mail"></i> {apt.email}
                                                </a>
                                                <a href={`tel:${apt.phone}`} className="flex items-center gap-2 hover:text-green-600 transition-colors">
                                                    <i className="feather icon-phone"></i> {apt.phone}
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
                                                <i className="feather icon-clock text-green-500"></i>
                                                {apt.appointmentDate ? new Date(apt.appointmentDate).toLocaleDateString() : 'Not specified'}
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 align-top">
                                            <div className="text-sm text-gray-600">
                                                {new Date(apt.date).toLocaleDateString()}
                                            </div>
                                            <div className="text-xs text-gray-400 mt-1">
                                                {new Date(apt.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 align-middle text-center">
                                            <a href={`tel:${apt.phone}`} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600 hover:bg-green-600 hover:text-white transition-colors" title="Call Patient">
                                                <i className="feather icon-phone-call"></i>
                                            </a>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AppointmentsPage;
