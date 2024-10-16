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
            api_key: 'ccaaf2689b668ef068779f5169e99f1d',
        };

        return config;
    },

    (error) => {
        return Promise.reject(error);
    }

);

export default api;