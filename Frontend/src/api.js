const API_BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';


import axios from "axios"

const api = axios.create({
    baseURL: API_BASE,
    withCredentials: true
})



// --- Auth APIs ---
export const loginAdmin = async (username, password) => {
    const response = await api.post(`/auth/login`, { username, password });
    return response;
};



// --- Lead APIs ---
export const getLeads = async () => {
    try {
        const response = await api.get(`/leads`);
        return response.data;
    } catch (error) {
        console.error('Error fetching leads:', error);
        return [];
    }
};

export const saveLead = async (lead) => {
    try {
        await api.post(`/leads`, lead);
    } catch (error) {
        console.error('Error saving lead:', error);
    }
};

// --- Appointment APIs ---
export const getAppointments = async () => {
    try {
        const response = await api.get(`/appointments`);
        return response.data;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        return [];
    }
};

export const saveAppointment = async (appointment) => {
    try {
        await api.post(`/appointments`, appointment);
    } catch (error) {
        console.error('Error saving appointment:', error);
    }
};
