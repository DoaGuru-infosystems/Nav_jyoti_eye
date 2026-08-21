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

export const resetPassword = async (identifier, newPassword) => {
    const response = await api.post(`/auth/reset-password`, { identifier, newPassword });
    return response;
};



// --- Lead APIs ---
export const getLeads = async (page = 1, limit = 5) => {
    try {
        const response = await api.get(`/leads?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching leads:', error);
        return { data: [], totalPages: 1 };
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
export const getAppointments = async (page = 1, limit = 5) => {
    try {
        const response = await api.get(`/appointments?page=${page}&limit=${limit}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching appointments:', error);
        return { data: [], totalPages: 1 };
    }
};

export const saveAppointment = async (appointment) => {
    try {
        const response = await api.post(`/appointments`, appointment);
        return { success: true, data: response.data };
    } catch (error) {
        console.error('Error saving appointment:', error);
        if (error.response && error.response.data && error.response.data.error) {
            return { success: false, message: error.response.data.error };
        }
        return { success: false, message: 'Server error. Please try again later.' };
    }
};
