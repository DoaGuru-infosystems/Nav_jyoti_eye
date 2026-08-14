// Simple mock data store using localStorage
const LEADS_KEY = 'navjyoti_leads';
const APPOINTMENTS_KEY = 'navjyoti_appointments';

const initialLeads = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890', message: 'I need to know more about cataract surgery.', date: new Date(Date.now() - 86400000).toISOString() },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '098-765-4321', message: 'Do you offer laser treatments?', date: new Date().toISOString() }
];

const initialAppointments = [
    { id: 1, name: 'Alice Brown', email: 'alice@example.com', phone: '555-0101', appointmentDate: '2026-09-01 10:00', department: 'General', date: new Date(Date.now() - 172800000).toISOString() },
    { id: 2, name: 'Bob White', email: 'bob@example.com', phone: '555-0202', appointmentDate: '2026-09-05 14:30', department: 'Laser Treatments', date: new Date().toISOString() }
];

export const getLeads = () => {
    let data = localStorage.getItem(LEADS_KEY);
    if (!data) {
        localStorage.setItem(LEADS_KEY, JSON.stringify(initialLeads));
        data = JSON.stringify(initialLeads);
    }
    return JSON.parse(data);
};

export const saveLead = (lead) => {
    const leads = getLeads();
    leads.push({ id: Date.now(), ...lead, date: new Date().toISOString() });
    localStorage.setItem(LEADS_KEY, JSON.stringify(leads));
};

export const getAppointments = () => {
    let data = localStorage.getItem(APPOINTMENTS_KEY);
    if (!data) {
        localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(initialAppointments));
        data = JSON.stringify(initialAppointments);
    }
    return JSON.parse(data);
};

export const saveAppointment = (appointment) => {
    const appointments = getAppointments();
    appointments.push({ id: Date.now(), ...appointment, date: new Date().toISOString() });
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
};
