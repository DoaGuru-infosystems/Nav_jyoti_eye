export const getAdminAuth = () => {
    return localStorage.getItem('adminToken') === 'true';
};

export const setAdminAuth = (value) => {
    if (value) {
        localStorage.setItem('adminToken', 'true');
    } else {
        localStorage.removeItem('adminToken');
    }
};
