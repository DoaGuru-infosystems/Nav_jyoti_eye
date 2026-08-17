import { useState, useEffect } from 'react';
import { getLeads } from '../../data/dataStore';

const ContactLeadsPage = () => {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        setLeads(getLeads().reverse());
    }, []);

    return (
        <div className="p-6 bg-gray-50 min-h-full">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">Contact Leads</h1>
                    <p className="text-gray-500 mt-1">Manage all your contact inquiries here.</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <i className="feather icon-users text-lg"></i>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500 font-medium">Total Leads</p>
                        <p className="text-xl font-bold text-gray-800">{leads.length}</p>
                    </div>
                </div>
            </div>

            <div className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-500 uppercase tracking-wider">
                                <th className="p-4 px-6">Name & Contact</th>
                                <th className="p-4 px-6">Date</th>
                                <th className="p-4 px-6">Message</th>
                                <th className="p-4 px-6 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {leads.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="p-8 text-center text-gray-500">No leads found.</td>
                                </tr>
                            ) : (
                                leads.map((lead) => (
                                    <tr key={lead.id} className="hover:bg-blue-50/50 transition-colors group">
                                        <td className="p-4 px-6 align-top">
                                            <div className="font-semibold text-gray-800 mb-1">{lead.name}</div>
                                            <div className="flex flex-col gap-1 text-sm text-gray-500">
                                                <a href={`mailto:${lead.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                                    <i className="feather icon-mail"></i> {lead.email}
                                                </a>
                                                <a href={`tel:${lead.phone}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                                    <i className="feather icon-phone"></i> {lead.phone}
                                                </a>
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 align-top">
                                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                                {new Date(lead.date).toLocaleDateString()}
                                            </span>
                                            <div className="text-xs text-gray-500 mt-1 pl-1">
                                                {new Date(lead.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 align-top">
                                            <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100 line-clamp-3 group-hover:bg-white transition-colors max-w-md">
                                                {lead.message || <span className="text-gray-400 italic">No message provided</span>}
                                            </div>
                                        </td>
                                        <td className="p-4 px-6 align-middle text-center">
                                            <a href={`mailto:${lead.email}`} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" title="Reply">
                                                <i className="feather icon-corner-up-left"></i>
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

export default ContactLeadsPage;
