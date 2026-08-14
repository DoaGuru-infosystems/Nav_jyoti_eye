import { useState, useEffect } from 'react';
import { getAppointments } from '../../data/dataStore';

const AppointmentsPage = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        setAppointments(getAppointments().reverse());
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Appointments</h1>
            <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
                <ul className="divide-y divide-gray-200">
                    {appointments.length === 0 ? (
                        <li className="p-8 text-center text-gray-500">No appointments found.</li>
                    ) : (
                        appointments.map((apt) => (
                            <li key={apt.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="font-medium text-lg text-gray-900">{apt.name}</div>
                                    <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        Submitted: {new Date(apt.date).toLocaleString()}
                                    </div>
                                </div>
                                <div className="text-gray-600 font-medium mb-3">
                                    <a href={`mailto:${apt.email}`} className="text-blue-600 hover:underline">{apt.email}</a> 
                                    <span className="mx-2">•</span> 
                                    <a href={`tel:${apt.phone}`} className="text-blue-600 hover:underline">{apt.phone}</a>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-2">
                                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                        <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Department</span>
                                        <span className="text-gray-800">{apt.department || 'Not specified'}</span>
                                    </div>
                                    <div className="bg-gray-50 p-3 rounded border border-gray-100">
                                        <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">Preferred Date</span>
                                        <span className="text-gray-800">{apt.appointmentDate || 'Not specified'}</span>
                                    </div>
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default AppointmentsPage;
