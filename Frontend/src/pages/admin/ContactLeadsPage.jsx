import { useState, useEffect } from 'react';
import { getLeads } from '../../data/dataStore';

const ContactLeadsPage = () => {
    const [leads, setLeads] = useState([]);

    useEffect(() => {
        setLeads(getLeads().reverse());
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Contact Leads</h1>
            <div className="bg-white shadow rounded-lg overflow-hidden border border-gray-200">
                <ul className="divide-y divide-gray-200">
                    {leads.length === 0 ? (
                        <li className="p-8 text-center text-gray-500">No leads found.</li>
                    ) : (
                        leads.map((lead) => (
                            <li key={lead.id} className="p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <div className="font-medium text-lg text-gray-900">{lead.name}</div>
                                    <div className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                        {new Date(lead.date).toLocaleString()}
                                    </div>
                                </div>
                                <div className="text-gray-600 font-medium mb-3">
                                    <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">{lead.email}</a> 
                                    <span className="mx-2">•</span> 
                                    <a href={`tel:${lead.phone}`} className="text-blue-600 hover:underline">{lead.phone}</a>
                                </div>
                                <div className="text-gray-700 bg-gray-50 p-4 rounded border border-gray-100 whitespace-pre-wrap">
                                    {lead.message || <span className="text-gray-400 italic">No message provided</span>}
                                </div>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
};

export default ContactLeadsPage;
