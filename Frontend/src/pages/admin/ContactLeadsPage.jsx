import { useState, useEffect } from 'react';
import { getLeads } from '../../api';

const ContactLeadsPage = () => {
    const [leads, setLeads] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalLeads, setTotalLeads] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getLeads(page, 5);
            setLeads(Array.isArray(result.data) ? result.data : []);
            setTotalPages(result.totalPages || 1);
            setTotalLeads(result.total || 0);
        };
        fetchData();
    }, [page]);

    return (
        <div className="bg-gray-50 min-h-full">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
                <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">Contact Leads</h1>
                    <p className="text-gray-500 mt-1 text-sm">Manage all your contact inquiries here.</p>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100 flex items-center gap-3 self-start">
                    <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <i className="feather icon-users" />
                    </div>
                    <div>
                        <p className="text-xs text-gray-500 font-medium">Total Leads</p>
                        <p className="text-xl font-bold text-gray-800">{totalLeads}</p>
                    </div>
                </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block bg-white shadow-sm rounded-xl overflow-hidden border border-gray-200">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-200 text-xs font-semibold text-gray-500 uppercase tracking-wider">
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
                                                    <i className="feather icon-mail" /> {lead.email}
                                                </a>
                                                <a href={`tel:${lead.phone}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                                    <i className="feather icon-phone" /> {lead.phone}
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
                                                <i className="feather icon-corner-up-left" />
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
                {leads.length === 0 ? (
                    <div className="bg-white rounded-xl border border-gray-200 p-8 text-center text-gray-500">No leads found.</div>
                ) : (
                    leads.map((lead) => (
                        <div key={lead.id} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <div className="font-semibold text-gray-800">{lead.name}</div>
                                    <div className="text-xs text-gray-400 mt-0.5">
                                        {new Date(lead.date).toLocaleDateString()} · {new Date(lead.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                    </div>
                                </div>
                                <a href={`mailto:${lead.email}`} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors" title="Reply">
                                    <i className="feather icon-corner-up-left" />
                                </a>
                            </div>
                            <div className="flex flex-col gap-1 text-sm text-gray-500 mb-3">
                                <a href={`mailto:${lead.email}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors truncate">
                                    <i className="feather icon-mail shrink-0" /> <span className="truncate">{lead.email}</span>
                                </a>
                                <a href={`tel:${lead.phone}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                                    <i className="feather icon-phone shrink-0" /> {lead.phone}
                                </a>
                            </div>
                            {lead.message && (
                                <div className="text-sm text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100">
                                    {lead.message}
                                </div>
                            )}
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

export default ContactLeadsPage;
