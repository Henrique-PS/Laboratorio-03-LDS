import api from '../axios/api'

export const register = async (payload) => {

    const { data } = await api.post('/api/auth/register', payload).catch(() => {
        throw new Error('Erro ao cadastrar usuário');
    });

    return data;
}

export const login = async (payload) => {
    const { data } = await api.post('/api/auth/login', payload, {
        withCredentials: true
    }).catch(() => {
        throw new Error('Erro ao realizar login');
    });

    return data;
}