import axios from "axios";

const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(

    (config) => {

        config.params = {
            ...config.params,
            api_key: import.meta.env.APP_API_KEY,
        };

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }

);

export default api;