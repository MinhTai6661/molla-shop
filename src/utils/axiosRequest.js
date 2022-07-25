const { default: axios } = require('axios');

export const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, param = {}) => {
    const res = await request.get(path, param);
    return res.data;
};
