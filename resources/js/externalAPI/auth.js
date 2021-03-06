export const login = (email, password) =>
    axios.post("/api/login", {'email': email, 'password': password});

export const getUser = () =>
    axios.get("/api/user");

export const logout = () =>
    axios.post("/api/logout");

export const refresh = () => {
    const refresh_token = localStorage.getItem("refresh_token");
    return axios.post("/api/refresh", null, { headers: { refreshToken: refresh_token } });
};
